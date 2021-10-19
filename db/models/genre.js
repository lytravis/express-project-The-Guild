'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {});
  Genre.associate = function(models) {
    Genre.hasMany(models.Game, { foreignKey: 'genreId'})
  };
  return Genre;
};
