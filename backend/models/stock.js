'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Drug, { foreignKey: 'DrugId', as: 'drug' });
      this.hasMany(models.Stock_Log, { foreignKey: 'StockId', as: 'logs' });
      this.hasMany(models.Dispense_Item, { foreignKey: 'StockId', as: 'dispensedItems' });
    }
  }
  Stock.init({
    Quantity: DataTypes.INTEGER,
    Selling_Price_Per_Unit: DataTypes.FLOAT,
    Self_Location: DataTypes.STRING,
    DrugId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};