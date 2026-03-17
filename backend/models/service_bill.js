'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service_Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service_Bill.init({
    Service_Fee: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Service_Bill',
  });
  return Service_Bill;
};