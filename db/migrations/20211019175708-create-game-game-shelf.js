'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GameGameShelves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gameShelvesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'GameShelves' }
      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Games' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GameGameShelves');
  }
};
