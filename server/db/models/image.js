'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
  
    static associate({User, Order, Basket, Favorite}) {
     this.hasMany(User, {foreingKey: 'userId'});
     this.hasMany(Order, {foreingKey: 'orderId'});
     this.hasMany(Basket, {foreingKey: 'basketId'});
     this.hasMany(Favorite, {foreingKey: 'favoriteId'});
  }
  Image.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};