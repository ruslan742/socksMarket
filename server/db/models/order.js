'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate({ User, Color, Pattern, Image }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Color, { foreignKey: 'colorId' });
      this.belongsTo(Pattern, { foreignKey: 'patternId' });
      this.BelongsTo(Image, { foreignKey: 'imageId' });
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    patternId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};