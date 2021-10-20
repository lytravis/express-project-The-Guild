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
          name: "Role Playing Game",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shooter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Action/Adventure",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sports",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Simulation",
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
