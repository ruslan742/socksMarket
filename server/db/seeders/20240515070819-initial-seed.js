/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Meetings',
      [
        {
          meetingname: 'встреча1', meetingaddres: 'Dubai', capacity: 5, counter: 0, createdAt: new Date(), updatedAt: new Date(),
        },
        {
          meetingname: 'встреча2', meetingaddres: 'Moscow', capacity: 14, counter: 0, createdAt: new Date(), updatedAt: new Date(),
        }, {
          meetingname: 'встреча3', meetingaddres: 'Chelabinsk', capacity: 7, counter: 0, createdAt: new Date(), updatedAt: new Date(),
        },
      ],
      {},
    );
    
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
