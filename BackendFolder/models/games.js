'use strict';
const { DataTypes } = require('sequelize');
const {
  Model,
  
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    
    static associate(models) {
      Games.belongsToMany(models.Wishlist, { through: 'Wishlist', foreignKey: 'gameId'})
    }
  }
  Games.init({
    title: DataTypes.STRING,
    shortdescription: DataTypes.TEXT,
    image: DataTypes.STRING,
    video: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdat'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedat'
    }
  }, {
    sequelize,
    modelName: 'Games',
    tableName: 'games',
    underscored: true
  });
  return Games;
};
