'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Story.init({
    userName: DataTypes.STRING,
    picture: DataTypes.STRING,
    watched: DataTypes.BOOLEAN,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};