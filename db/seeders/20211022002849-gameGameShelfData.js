"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "GameGameShelves",
      [
        {
          gameShelvesId: 1,
          gameId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameShelvesId: 1,
          gameId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameShelvesId: 1,
          gameId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameShelvesId: 2,
          gameId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameShelvesId: 2,
          gameId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameShelvesId: 2,
          gameId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameShelvesId: 3,
          gameId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameShelvesId: 3,
          gameId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          gameShelvesId: 3,
          gameId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("GameGameShelves", null, {});
  },
};
