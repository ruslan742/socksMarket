'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pattern extends Model {
   
    static associate({ Order, Basket, Favorite }) {
      this.hasMany(Order, {foreignKey: 'patternId'});
      this.hasMany(Basket, {foreignKey: 'patternId'});
      this.hasMany(Favorite, {foreignKey: 'patternId'});
    }
  }
  Pattern.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pattern',
  });
  return Pattern;
};