'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug_Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Bill, { foreignKey: 'id', as: 'mainBill' });
      this.belongsTo(models.Dispense, { foreignKey: 'DispenseId', as: 'dispenseRecord' });
    }
  }
  Drug_Bill.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    Drug_Fee: DataTypes.FLOAT,
    DispenseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drug_Bill',
  });
  return Drug_Bill;
};