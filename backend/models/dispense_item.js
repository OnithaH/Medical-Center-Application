'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dispense_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dispense_Item.init({
    Sub_Total: DataTypes.FLOAT,
    Quantity_Dispensed: DataTypes.INTEGER,
    Unit_Price: DataTypes.FLOAT,
    DispenseId: DataTypes.INTEGER,
    DrugsPerPrescriptionId: DataTypes.INTEGER,
    StockId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dispense_Item',
  });
  return Dispense_Item;
};