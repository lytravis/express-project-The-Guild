'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameGameShelf = sequelize.define('GameGameShelf', {
    gameShelvesId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  GameGameShelf.associate = function(models) {
    
  };
  return GameGameShelf;
};
