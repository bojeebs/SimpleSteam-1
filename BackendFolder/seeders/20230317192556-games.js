'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const list = [
      {
        title: 'Witcher 3',
        categories: 'RPG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bioshock',
        categories: 'RPG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Runescape',
        categories: 'MMO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Library of Ruina',
        categories: 'MMO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]


    await queryInterface.bulkInsert('games', list)
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('games')
  }
};
