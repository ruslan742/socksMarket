'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@admin',
        password: await bcrypt.hash('admin', 10),
        isAdmin: true,
      },
      {
        name: 'Алла',
        email: 'alla@gmail.com',
        password: await bcrypt.hash('admin', 10),
        isAdmin: false,
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
