'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Appointment, { foreignKey: 'ApptId', as: 'appointment' });
      this.belongsTo(models.User, { foreignKey: 'UserId', as: 'doctor' });
      this.hasOne(models.Prescription, { foreignKey: 'ConsultId', as: 'prescription' });
      this.hasMany(models.Test_Request, { foreignKey: 'ConsultId', as: 'testRequests' });
      this.hasMany(models.Consultation_Service, { foreignKey: 'ConsultId', as: 'services' });
      this.hasOne(models.Dispense, { foreignKey: 'ConsultId', as: 'dispense' });
      this.hasOne(models.MedicalCertificate, { foreignKey: 'ConsultId', as: 'mc' });
      this.hasOne(models.Bill, { foreignKey: 'ConsultId', as: 'bill' });
    }
  }
  Consultation.init({
    Diagnosis: DataTypes.STRING,
    Doctor_Notes: DataTypes.TEXT,
    Date: DataTypes.DATE,
    ApptId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Consultation',
  });
  return Consultation;
};