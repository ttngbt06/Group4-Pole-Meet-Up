const sequelize = require('./config/connection');
const { Model, DataTypes } = require('sequelize');

class PollCategory extends Model {}

PollCategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        poll_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "poll",
                key: "id",
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: "category",
            key: "id"
        },
    },
);