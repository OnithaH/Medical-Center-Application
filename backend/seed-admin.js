const bcrypt = require('bcryptjs');
const { User } = require('./models');

async function seedAdmin() {
    try {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        
        const [user, created] = await User.findOrCreate({
            where: { Username: 'admin' },
            defaults: {
                Password: hashedPassword,
                Role: 'Admin'
            }
        });

        if (created) {
            console.log('✅ Initial Admin user created:');
            console.log('   Username: admin');
            console.log('   Password: admin123');
        } else {
            console.log('ℹ️ Admin user already exists.');
        }
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding admin:', error);
        process.exit(1);
    }
}

seedAdmin();
