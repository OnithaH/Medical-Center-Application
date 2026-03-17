'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    Name: DataTypes.STRING,
    Age: DataTypes.INTEGER,
    Gender: DataTypes.STRING,
    Contact_No: DataTypes.STRING,
    Weight: DataTypes.FLOAT,
    Allergies: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};