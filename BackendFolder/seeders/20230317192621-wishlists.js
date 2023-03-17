'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [
      {
      userId: 1,
      gamesId:  1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        userId: 1,
        gamesId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('wishlists', list)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('wishlists')
  }
}
