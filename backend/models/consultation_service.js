'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultation_Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Consultation, { foreignKey: 'ConsultId', as: 'consultation' });
      this.belongsTo(models.Service, { foreignKey: 'ServiceId', as: 'serviceInfo' });
      this.hasOne(models.Service_Bill, { foreignKey: 'ConsultationServiceId', as: 'billingInfo' });
    }
  }
  Consultation_Service.init({
    Custom_Task_Name: DataTypes.STRING,
    Custom_Price: DataTypes.FLOAT,
    ConsultId: DataTypes.INTEGER,
    ServiceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Consultation_Service',
  });
  return Consultation_Service;
};