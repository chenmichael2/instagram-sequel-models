'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suggestions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Suggestions.init({
    username: DataTypes.STRING,
    mutuals: DataTypes.ARRAY,
    picture: DataTypes.STRING,
    follow: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Suggestions',
  });
  return Suggestions;
};