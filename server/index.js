const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const directryPodCast = '../client/assets/musics/'
const directoryMusicClient = '../../../../assets/musics/'
app.use(cors())
app.use(express.json())

const namePodCasts = fs.readdirSync(directryPodCast, { encoding: 'utf8' })

let musicsPath = [...namePodCasts]
let arrayDirectoryMusicClient;
let arrayTitleMusicClient;

console.log(musicsPath);
const returnFormattedMusicasArray = async ()=>{
    namePodCasts.forEach(musicName =>{
        let nameFormatted = musicName.replaceAll(' ', '-').replaceAll('---', '-')
        arrayDirectoryMusicClient = musicsPath.map(music =>{
    
              return music
          })
        
        if(directryPodCast + musicName !== directryPodCast + nameFormatted){
            fs.rename(directryPodCast + musicName, directryPodCast + nameFormatted, (err) => {
              if (err) throw err;
              console.log(`O aquivo ${musicName} foi alterado para o arquivo ${nameFormatted}`);
            });
        }
    
    
    })
        
        return arrayDirectoryMusicClient
}
const returnFormattedTittleMusicasArray = async ()=>{
    namePodCasts.forEach(musicName =>{
        arrayTitleMusicClient = musicsPath.map(music =>{
    
              return music.replaceAll('-', ' ').replaceAll('.mp3', '')
          })
        
    })
        
        return arrayTitleMusicClient
}


app.get('/', async (req, res) => {
    await returnFormattedMusicasArray()
    res.send(arrayDirectoryMusicClient)

})
app.get('/namesSonds', async (req, res) => {
    await returnFormattedTittleMusicasArray()
    res.send(arrayTitleMusicClient)

})


app.listen(4000, () => {
    console.log('Servidor rodando');
})