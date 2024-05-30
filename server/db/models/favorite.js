'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
   
    static associate({ User, Color, Pattern, Image}) {
     this.belongsTo(User, {foreingKey: 'userId'});
     this.belongsTo(Color, {foreingKey: 'colorId'});
     this.belongsTo(Pattern, {foreignKey: 'patternId'});
     this.belongsTo(Image, {foreignKey: 'imageId'});
    }
  }
  Favorite.init({
    userId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    patternId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};