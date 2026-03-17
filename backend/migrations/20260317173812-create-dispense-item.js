'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dispense_Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Sub_Total: {
        type: Sequelize.FLOAT
      },
      Quantity_Dispensed: {
        type: Sequelize.INTEGER
      },
      Unit_Price: {
        type: Sequelize.FLOAT
      },
      DispenseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dispenses',
          key: 'id'
        }
      },
      DrugsPerPrescriptionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Drugs_Per_Prescriptions',
          key: 'id'
        }
      },
      StockId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stocks',
          key: 'id'
        }
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
    await queryInterface.dropTable('Dispense_Items');
  }
};