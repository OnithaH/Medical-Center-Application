'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Supplier, { foreignKey: 'SupplierId', as: 'supplier' });
      this.belongsTo(models.Stock_Log, { foreignKey: 'id', as: 'log' });
    }
  }
  Restock.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false
    },
    Unit_Price: DataTypes.FLOAT,
    SupplierId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Restock',
  });
  return Restock;
};