'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Patient, { foreignKey: 'PatientId', as: 'patient' });
      this.belongsTo(models.User, { foreignKey: 'UserId', as: 'assistant' });
      this.hasOne(models.Consultation, { foreignKey: 'ApptId', as: 'consultation' });
    }
  }
  Appointment.init({
    Appt_No: DataTypes.STRING,
    Date: DataTypes.DATE,
    Status: DataTypes.STRING,
    PatientId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};