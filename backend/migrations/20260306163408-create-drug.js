'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Drugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Generic_Name: {
        type: Sequelize.STRING
      },
      Brand_Name: {
        type: Sequelize.STRING
      },
      Dosage: {
        type: Sequelize.STRING
      },
      Pack_Size: {
        type: Sequelize.STRING
      },
      Pack_Type: {
        type: Sequelize.STRING
      },
      Manufacture: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      Agent: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Drugs');
  }
};