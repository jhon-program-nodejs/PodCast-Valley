const Sequelize = require('sequelize')
const connection = new Sequelize('podcastsValley','root', process.env.PASSWORD_MYSQL ,{
    host:'localhost',
    dialect:'mysql'
})


connection.sync({force:false})

module.exports = connection