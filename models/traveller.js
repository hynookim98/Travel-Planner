// ? what is model
const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../config');

// creating our traveller model
class Traveller extends Model {}

// creating fields/columns for Traveller Model
Traveller.init(
    {
        // creating id field with primary key association
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // creating name field
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:  {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: "traveller",
    }
);

module.exports = Traveller;