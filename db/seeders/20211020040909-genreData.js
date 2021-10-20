"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Genres",
      [
        {
          name: "Shooters",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Real-time strategy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Multiplayer online battle arena",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Role-playing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Simulation and sports",
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
    return queryInterface.bulkDelete("Genres", null, {});
  },
};
