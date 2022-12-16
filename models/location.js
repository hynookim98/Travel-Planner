const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Location extends Model {}

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'location'
    }
);

module.exports = Location;