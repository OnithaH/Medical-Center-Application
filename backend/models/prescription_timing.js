'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription_Timing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Drugs_Per_Prescription, { foreignKey: 'DrugsPerPrescriptionId', as: 'medication' });
    }
  }
  Prescription_Timing.init({
    Scheduled_Time: DataTypes.TIME,
    Instruction: DataTypes.STRING,
    DrugsPerPrescriptionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prescription_Timing',
  });
  return Prescription_Timing;
};