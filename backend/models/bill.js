'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Consultation, { foreignKey: 'ConsultId', as: 'consultation' });
      this.hasOne(models.Service_Bill, { foreignKey: 'id', as: 'serviceCharges' });
      this.hasOne(models.Drug_Bill, { foreignKey: 'id', as: 'drugCharges' });
    }
  }
  Bill.init({
    Date: DataTypes.DATE,
    Status: DataTypes.STRING,
    Total_Amount: DataTypes.FLOAT,
    Bill_Type: DataTypes.STRING,
    ConsultId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};