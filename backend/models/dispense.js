'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dispense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      this.belongsTo(models.Consultation, { foreignKey: 'ConsultId', as: 'consultation' });
      this.hasMany(models.Dispense_Item, { foreignKey: 'DispenseId', as: 'items' });
      this.belongsTo(models.Stock_Log, { foreignKey: 'id', as: 'log' });
    }

  }
  Dispense.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    Dispense_Date: DataTypes.DATE,
    Total: DataTypes.FLOAT,
    ConsultId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dispense',
  });
  return Dispense;
};