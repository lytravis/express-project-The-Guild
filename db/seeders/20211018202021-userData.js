"use strict";
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Demo",
          lastName: "User",
          email: "demo@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Omkar",
          lastName: "Mehendale",
          email: "mehendaleomkar@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Travis",
          lastName: "Ly",
          email: "lytravis@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Nick",
          lastName: "Rogers",
          email: "rogersnick@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ben",
          lastName: "Smith",
          email: "smithben@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
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
    return queryInterface.bulkDelete("Users", null, {});
  },
};
