'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test_Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Test_Request.init({
    Notes: DataTypes.TEXT,
    ConsultId: DataTypes.INTEGER,
    TestId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Test_Request',
  });
  return Test_Request;
};