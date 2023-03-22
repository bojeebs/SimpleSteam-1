'use strict';
const { DataTypes } = require('sequelize');
const {
  Model,
  
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wishlist.belongsTo(models.Users, {foreignKey: 'userId'})
      Wishlist.belongsToMany(models.Games, { through: 'Wishlist', foreignKey: 'gamesId'})
    }
  }
  Wishlist.init({

    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    gamesId: {
      type: DataTypes.INTEGER,
      //unique: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'games',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Wishlist',
    tableName: 'wishlists'
  });
  return Wishlist;
};