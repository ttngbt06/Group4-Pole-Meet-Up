const sequelize = require('./config/connection');
const { Model, DataTypes } = require('sequelize');

class Poll extends Model {}

Poll.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATEONLY
        },
        expiration_date: {
            type: DataTypes.DATEONLY,
        },
    },
)