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
        {
          firstName: "Michael",
          lastName: "Grzesiek",
          email: "shroud@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mike",
          lastName: "Jones",
          email: "mikejones@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Tyrone",
          lastName: "Biggums",
          email: "stevestiffs@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Rick",
          lastName: "James",
          email: "rickjames@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Johnny",
          lastName: "Johnson",
          email: "johnnyjohns@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          firstName: "Elon",
          lastName: "Musk",
          email: "doge@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Barack",
          lastName: "Obama",
          email: "the44th@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Donald",
          lastName: "Trump",
          email: "itshyuuuuge@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Nikki",
          lastName: "Nicks",
          email: "itsnickn@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jessica",
          lastName: "Jones",
          email: "jesjones@gmail.com",
          hashedPassword: bcrypt.hashSync("password", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Mary",
          lastName: "Lamb",
          email: "marylamb@gmail.com",
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
