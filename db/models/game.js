'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(280),
      allowNull: false
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Game.associate = function(models) {
    const columnMapping = {
      through: 'GameGameShelf',
      otherKey: 'gameShelvesId',
      foreignKey: 'gameId'
    }

    Game.belongsTo(models.Genre, { foreignKey: 'genreId' }),
    Game.hasMany(models.Review, { foreignKey: 'gameId' }),
    Game.belongsToMany(models.GameShelf, columnMapping)
  };
  return Game;
};
