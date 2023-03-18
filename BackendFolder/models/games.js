'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Games.belongsTo(models.Wishlist, {foreignKey: 'gamesId'})
    }
  }
  Games.init({
    title: DataTypes.STRING,
    categories: DataTypes.STRING,
    metascore: DataTypes.INTEGER,
    metalink: DataTypes.STRING,
    shortdescription: DataTypes.STRING,
    thumbnailimage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Games',
    tableName: 'games'
  });
  return Games;
};