const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
// This line finds your models/index.js file to talk to Aiven
const { Drug } = require('../models');

const seedDrugs = async () => {
    const results = [];
    // This tells the script exactly where your CSV is located
    const filePath = path.join(__dirname, '../data/drugs.csv');

    // Safety check: Does the file actually exist?
    if (!fs.existsSync(filePath)) {
        console.error(`❌ Error: Could not find the file at ${filePath}`);
        process.exit(1);
    }

    console.log('Reading CSV file...');

    // Clear existing data to avoid duplicates and fix NULL values
    console.log('Clearing existing drug data (cascading & restarting identity)...');
    await Drug.sequelize.query('TRUNCATE TABLE "Drugs" RESTART IDENTITY CASCADE');

    fs.createReadStream(filePath)
        .pipe(csv({
            mapHeaders: ({ header }) => header.replace(/^\ufeff/, '').trim()
        }))
        .on('data', (data) => results.push(data))
        .on('end', async () => {
            console.log(`Parsed ${results.length} drugs. Starting upload to Aiven...`);

            try {
                // This is the magic command that sends all 6,520 rows at once
                await Drug.bulkCreate(results);
                console.log('✅ Success! 6,520 drugs imported to Aiven.');
                process.exit();
            } catch (error) {
                console.error('❌ Error importing drugs:', error);
                console.log('💡 Tip: Check if your CSV headers match your Database column names exactly.');
                process.exit(1);
            }
        });
};

seedDrugs();