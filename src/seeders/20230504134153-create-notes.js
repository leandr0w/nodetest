'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'notes',
      [
        {
          title: 'Nota1wow',
          content: 'Explicar despliegues',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Nota2wow',
          content: 'Explicar despliegues',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Nota3wow',
          content: 'Explicar despliegues',
          status: 'active',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('notes', null, {});
  },
};
