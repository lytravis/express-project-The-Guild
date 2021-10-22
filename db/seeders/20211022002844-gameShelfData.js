"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "GameShelves",
      [
        {
          shelfName: "Is Playing",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shelfName: "Has Played",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shelfName: "Will Play",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          shelfName: "Favorites",
          userId: 1,
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
    return queryInterface.bulkDelete("GameShelves", null, {});
  },
};
