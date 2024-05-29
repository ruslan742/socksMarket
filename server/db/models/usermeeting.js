const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usermeeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Meeting }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Meeting, { foreignKey: 'meetingId' });
      // define association here
    }
  }
  Usermeeting.init({
    meetingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Usermeeting',
  });
  return Usermeeting;
};
