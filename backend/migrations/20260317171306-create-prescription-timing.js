'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prescription_Timings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Scheduled_Time: {
        type: Sequelize.TIME
      },
      Instruction: {
        type: Sequelize.STRING
      },
      DrugsPerPrescriptionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Drugs_Per_Prescriptions',
          key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prescription_Timings');
  }
};