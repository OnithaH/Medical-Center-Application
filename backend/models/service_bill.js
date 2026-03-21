'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service_Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Bill, { foreignKey: 'id', as: 'mainBill' });
      this.belongsTo(models.Consultation_Service, { foreignKey: 'ConsultationServiceId', as: 'consultationService' });
    }

  }
  Service_Bill.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    Service_Fee: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Service_Bill',
  });
  return Service_Bill;
};