'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalCertificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MedicalCertificate.init({
    Reason: DataTypes.STRING,
    Date_Issued: DataTypes.DATE,
    End_Date: DataTypes.DATE,
    ConsultId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MedicalCertificate',
  });
  return MedicalCertificate;
};