'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mypost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mypost.init({
    username: DataTypes.STRING,
    post: DataTypes.STRING,
    description: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    comments: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mypost',
  });
  return Mypost;
};