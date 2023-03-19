'use strict';
const { DataTypes } = require('sequelize');
const {
  Model,
  
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Games.belongsToMany(models.Wishlist, { through: 'Wishlist', foreignKey: 'id'})
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