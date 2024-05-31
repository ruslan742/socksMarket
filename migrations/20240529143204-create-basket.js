'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Baskets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {       
          model: 'Users',
                     key: 'id',
              },
                   onDelete: 'CASCADE'
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: {       
          model: 'Colors',
                     key: 'id',
               },
                   onDelete: 'CASCADE'
      },
      patternId: {
        type: Sequelize.INTEGER,
        references: {       
          model: 'Patterns',
                     key: 'id',
                },
                   onDelete: 'CASCADE'
      },
      imageId: {
        type: Sequelize.INTEGER,
        references: {       
          model: 'Images',
                     key: 'id',
                  },
                   onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Baskets');
  }
};