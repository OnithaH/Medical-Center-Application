'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drugs_Per_Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Prescription, { foreignKey: 'PrescriptionId', as: 'prescription' });
      this.belongsTo(models.Drug, { foreignKey: 'DrugId', as: 'drug' });
      this.hasMany(models.Prescription_Timing, { foreignKey: 'DrugsPerPrescriptionId', as: 'timings' });
      this.hasOne(models.Dispense_Item, { foreignKey: 'DrugsPerPrescriptionId', as: 'dispenseItem' });
    }
  }
  Drugs_Per_Prescription.init({
    Duration: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    PrescriptionId: DataTypes.INTEGER,
    DrugId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drugs_Per_Prescription',
  });
  return Drugs_Per_Prescription;
};