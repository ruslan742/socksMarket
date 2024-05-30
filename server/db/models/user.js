'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

      static associate({ Order, Basket, Favorite }) {
        this.hasMany(Order, {foreignKey: 'userId'});
        this.hasMany(Basket, {foreignKey: 'userId'});
        this.hasMany(Favorite, {foreignKey: 'userId'}); 
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};