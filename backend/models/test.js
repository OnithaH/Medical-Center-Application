'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Test_Request, { foreignKey: 'TestId', as: 'requests' });
    }

  }
  Test.init({
    Test_Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};