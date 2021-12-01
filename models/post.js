'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    username: DataTypes.STRING,
    userPicture: DataTypes.STRING,
    post: DataTypes.ARRAY,
    likes: DataTypes.NUMBER,
    comment: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};