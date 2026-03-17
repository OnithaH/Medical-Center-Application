'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock_Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stock_Log.init({
    Quantity: DataTypes.INTEGER,
    Date: DataTypes.DATE,
    Log_Type: DataTypes.STRING,
    Balance_After: DataTypes.INTEGER,
    StockId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock_Log',
  });
  return Stock_Log;
};