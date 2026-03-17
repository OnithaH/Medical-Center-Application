'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug_Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drug_Bill.init({
    Drug_Fee: DataTypes.FLOAT,
    DispenseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drug_Bill',
  });
  return Drug_Bill;
};