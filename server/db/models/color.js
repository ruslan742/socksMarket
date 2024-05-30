'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
  
    static associate({ Order, Basket, Favorite }) {
      this.hasMany(Order, {foreignKey: 'colorId'});
      this.hasMany(Basket, {foreignKey: 'colorId'});
      this.hasMany(Favorite, {foreignKey: 'colorId'});
    }
  }
  Color.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};