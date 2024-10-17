'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Color.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Do not allow NULL values
      unique: true,     // Ensure uniqueness at the model level
      validate: {
        notNull: {
          msg: 'Name cannot be null' // Custom error message for null values
        },
        notEmpty: {
          msg: 'Name cannot be empty' // Custom error message for empty strings
        }
      }
    },
    isPrimary: {
      type: DataTypes.BOOLEAN,
      allowNull: false, // Do not allow NULL values
      defaultValue: false, // Default to false for non-primary colors
      validate: {
        notNull: {
          msg: 'isPrimary cannot be null' // Custom error message for null values
        },
        isBoolean(value) {
          if (typeof value !== 'boolean') {
            throw new Error('isPrimary must be a boolean value');
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};