const Sequelize = require('sequelize')
const connection = require('../database/database')

const Musics = connection.define('Musicas', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    uri: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hours: {
        type: Sequelize.STRING,
        allowNull: false,
    },

})

Musics.sync({ force: false })

module.exports = Musics