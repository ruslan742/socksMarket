const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Usermeeting }) {
      this.belongsToMany(User, { through: Usermeeting, foreignKey: 'meetingId' });
      // define association here
    }
  }
  Meeting.init({
    meetingname: DataTypes.STRING,
    meetingaddres: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    counter: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Meeting',
  });
  return Meeting;
};
