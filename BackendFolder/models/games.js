'use strict';
const { DataTypes } = require('sequelize');
const {
  Model,
  
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    
    static associate(models) {
      Games.belongsToMany(models.Wishlist, { through: 'Wishlist', foreignKey: 'id'})
    }
  }
  Games.init({
    title: DataTypes.STRING,
    shortdescription: DataTypes.TEXT,
    image: DataTypes.STRING,
    video: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Games',
    tableName: 'games'
  });
  return Games;
};