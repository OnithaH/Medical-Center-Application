'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drug.init({
    Generic_Name: DataTypes.STRING,
    Brand_Name: DataTypes.STRING,
    Dosage: DataTypes.STRING,
    Pack_Size: DataTypes.STRING,
    Pack_Type: DataTypes.STRING,
    Manufacture: DataTypes.STRING,
    Country: DataTypes.STRING,
    Agent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};