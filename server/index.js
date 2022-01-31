const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const connection = require('./database/database')
const Musics = require('./music/Musics')
connection.authenticate()
    .then(() => console.log('Banco acessado!'))
    .catch(err => console.log(err))

app.use(cors())
app.use(express.json())


app.get('/getMusic', async (req, res) => {
    const data = await Musics.findAll({ raw: true ,order:[
        ['id', 'DESC']
    ]})
    if (data == "") {
        res.send('Banco de dados vazio!')
        return
    }
    res.json(data)

})
app.post('/sendMusic', async (req, res) => {
    const data = req.body
    const { name,uri, date, hours } = await data

    try {
        await Musics.create({
        
            name: name,
            uri: uri,
            date:date,
            hours:hours
        })

    } catch (error) {
        console.log('Ocorreu um erro!');
    }



})

app.listen(4000, () => {
    console.log('Servidor rodando');
})