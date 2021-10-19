'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.NUMERIC(2,1),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Game, { foreignKey: 'gameId' }),
    Review.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Review;
};
