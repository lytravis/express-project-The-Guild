'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {
       firstName: 'Omkar',
       lastName: 'Mehendale',
       email: 'mehendaleomkar@gmail.com',
       hashedPassword: 'password',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      firstName: 'Travis',
      lastName: 'Ly',
      email: 'lytravis@gmail.com',
      hashedPassword: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Nick',
      lastName: 'Rogers',
      email: 'rogersnick@gmail.com',
      hashedPassword: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Ben',
      lastName: 'Smith',
      email: 'smithben@gmail.com',
      hashedPassword: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
