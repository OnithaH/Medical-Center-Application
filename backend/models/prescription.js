'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Consultation, { foreignKey: 'ConsultId', as: 'consultation' });
      this.hasMany(models.Drugs_Per_Prescription, { foreignKey: 'PrescriptionId', as: 'medications' });
    }
  }
  Prescription.init({
    ConsultId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prescription',
  });
  return Prescription;
};