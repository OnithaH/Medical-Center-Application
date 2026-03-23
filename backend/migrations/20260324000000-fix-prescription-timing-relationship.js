'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Remove the backwards foreign key from Prescription_Timings
    await queryInterface.removeColumn('Prescription_Timings', 'DrugsPerPrescriptionId');

    // 2. Add the correct foreign key to Drugs_Per_Prescriptions
    await queryInterface.addColumn('Drugs_Per_Prescriptions', 'PrescriptionTimingId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Prescription_Timings',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    // 1. Remove the foreign key from Drugs_Per_Prescriptions
    await queryInterface.removeColumn('Drugs_Per_Prescriptions', 'PrescriptionTimingId');

    // 2. Add the backwards foreign key back to Prescription_Timings
    await queryInterface.addColumn('Prescription_Timings', 'DrugsPerPrescriptionId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Drugs_Per_Prescriptions',
        key: 'id'
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  }
};
