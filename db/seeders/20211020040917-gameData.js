"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Games",
      [
        {
          title: "Call of Duty: Vanguard",
          image:
            "demo@https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZO_As720VtpLfxxlJjcJHInHAW5bCU8tJg&usqp=CAU.com",
          genreId: 1,
          description:
            "Through a deeply engaging single player Campaign, a select group of soldiers from different countries rise to meet the world's gravest threat. Players will also make their mark across Call of Duty’s signature Multiplayer experience, plus an exciting new Zombies experience developed by Treyarch.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Call of Duty: Black Ops Cold War",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZAqNVhBdaXDoseUz10NJHN9M3v8pGrmGUgrrAd-615qAMf5eKdctn49HmEHIKjWgjos&usqp=CAU",
          genreId: 1,
          description:
            "Call of Duty: Black Ops Cold War is a 2020 first-person shooter video game developed by Treyarch and Raven Software and published by Activision.",
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
    return queryInterface.bulkDelete("Games", null, {});
  },
};
