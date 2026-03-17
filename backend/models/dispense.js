'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dispense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dispense.init({
    Dispense_Date: DataTypes.DATE,
    Total: DataTypes.FLOAT,
    ConsultId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dispense',
  });
  return Dispense;
};