const Sequelize = require('sequelize')
const connection = new Sequelize('podcastsValley','root', 'ja2213182019',{
    host:'localhost',
    dialect:'mysql'
})

connection.sync({force:false})

module.exports = connection