'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [
      {
        username: 'Tyler',
        password: '1234',
        email: 'fake@fake.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username:'Alpagu',
        password: '12345',
        email: 'fake@fake.com',
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ]

    await queryInterface.bulkInsert('users', list)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};
