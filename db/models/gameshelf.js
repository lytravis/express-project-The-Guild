'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameShelf = sequelize.define('GameShelf', {
    shelfName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  GameShelf.associate = function(models) {
    const columnMapping = {
      through: 'GameGameShelf',
      otherKey: 'gameId',
      foreignKey: 'gameShelvesId'
    }

    GameShelf.belongsTo(models.User, { foreignKey: 'userId' }),
    GameShelf.belongsToMany(models.Game, columnMapping)
  };
  return GameShelf;
};
