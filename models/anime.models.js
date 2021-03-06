const {Sequelize, DataTypes} = require('sequelize');
const Model = Sequelize.Model;
const {sequelize} = require('./../config/db');

// Crear el modelo (tabla)
class Anime extends Model {};

Anime.init({
    // Agregar columna name
    name: {
        // VARCHAR
        type: DataTypes.STRING,
        // NON NULL (obligatorio)
        allowNull: false,
    },

    genre: {
        // VARCHAR
        type: DataTypes.STRING,
        // NON NULL (obligatorio)
        allowNull: false,
    },


    year: {
        // VARCHAR
        type: DataTypes.STRING,
        // NON NULL (obligatorio)
        allowNull: false,
    },

}, {
    // Conexión (requerida)
    sequelize,
    // Renombrar tabla a minúsculas (opcional)
    modelName: 'anime',
});

module.exports = {Anime};