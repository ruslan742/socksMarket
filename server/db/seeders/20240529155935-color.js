'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Colors', [
        {
          name: 'red',
        },
        {
          name: 'blue',
        },
        {
          name: 'green',
        },
        {
          name: 'black',
        },
        {
          name: 'white',
        },
        {
          name: 'yellow',
        },
        {
          name: 'orange',
        },
        {
          name: 'purple',
        },
        {
          name: 'pink',
        },
        {
          name: 'gray',
        },
        {
          name: 'beige',
        },
        {
          name: 'brown',
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
