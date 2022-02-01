//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { Audio } from 'expo-av';

let sondMaster;
let playbackStatus;
let counter = 0
let counterStatus = 0
let incrementer = 0
let stopSetIntervalOne;
let stopSetIntervalTwo;

// create a component
const Footer = ({ route, navigation }) => {
    let { uri, name, res, index } = route.params;
    const [nameMusic, setNameMusic] = useState()
    const [status, setStatus] = useState('Tocando')
    const [soundMusic, setSoundMusic] = useState();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        playSound(uri)
        setNameMusic(name)
        counter = index
        return soundMusic
            ? () => {
                soundMusic.unloadAsync();
            }
            : undefined;
    }, [soundMusic])

    async function playSound(URI) {
        counterStatus = 0
        // console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            { uri: URI },
        );

        // response = [...res]
        sondMaster = sound
        setStatus('Tocando')
        setSoundMusic(soundMusic);

        await sound.playAsync();
        // playbackStatus = await sound.getStatusAsync()
        progressBar(playbackStatus)

    }

    const progressBar = async (musicPlayed) => {

        musicPlayed = await sondMaster.getStatusAsync()

        let { durationMillis, isPlaying } = musicPlayed

        console.log(durationMillis);

        songDurationInSeconds = (durationMillis + 12000 )/ 1000

        incrementer = 100 / songDurationInSeconds

        if (isPlaying) {

            setProgress(`${counterStatus}%`)

            stopSetInterval = setInterval(() => {

                if (counterStatus <= 100) {
                    setProgress(`${counterStatus += incrementer}%`)
                    return
                }
                setStatus('Pausado')
                advanceMusic()
            }, 1000)
        }
    }

    const press = async (e) => {

        playbackStatus = await sondMaster.getStatusAsync()

        let { durationMillis } = playbackStatus

        // console.log(playbackStatus);

        // console.log(durationMillis);

        let totalLengthOfProgressBar = 290 / 100

        console.log("totalLengthOfProgressBar", totalLengthOfProgressBar)

        let barProgressPercentage = e.locationX / totalLengthOfProgressBar

        console.log('barProgressPercentage:', barProgressPercentage)

        let modifyAudioFloor = (durationMillis / 100) * barProgressPercentage
        
        console.log('modifyAudioFloor:', modifyAudioFloor)

        clearInterval(stopSetInterval)

        counterStatus = barProgressPercentage

        await sondMaster.setPositionAsync(modifyAudioFloor)

        // console.log(modifyAudioFloor, barProgressPercentage);

        setProgress(`${counterStatus}%`)

        stopSetInterval = setInterval(() => {

            if (counterStatus <= 100) {
                setProgress(`${counterStatus += incrementer}%`)
                return
            }
            setStatus('Pausado')

        }, 1000)

    }

    const PressPlaySongs = async () => {


        await sondMaster.playAsync()

        setStatus('Tocando')

    }

    const PressPauseSongs = async () => {

        await sondMaster.pauseAsync()

        setStatus('Pausado')

        clearInterval(stopSetIntervalOne)
        clearInterval(stopSetIntervalTwo)
    }



    const backMusic = async () => {

        counterStatus = 0


        if (counter > 0) {

            await sondMaster.stopAsync()

            counter--

            const findElement = res.find(element => element.index == counter)


            playSound(res[counter].uri)

            setNameMusic(findElement.nameFormated)


            return

        }

        counter = 0
    }
    const advanceMusic = async () => {

        counterStatus = 0

        if (counter < res.length - 1) {

            await sondMaster.stopAsync()

            counter++

            const findElement = res.find(element => element.index == counter)


            setNameMusic(findElement.nameFormated)

            setStatus('Tocando')

            playSound(res[counter].uri)


            return

        }
        counter = res.length - 1
    }
    return (
        <View style={styles.container}>

            <View style={styles.describleAudio}>

                <View style={styles.viewContainerText}>
                    <Text style={styles.textTitle}>
                        Music:
                    </Text>
                    <Text style={styles.textRefMusic}>
                        {nameMusic}
                    </Text>
                </View>

                <View style={styles.viewContainerText}>
                    <Text style={styles.textTitle}>
                        Status:
                    </Text>
                    <Text
                        style={status === 'Tocando' ? styles.textRefStatusGreen : styles.textRefStatusRed}>
                        {status}
                    </Text>
                </View>


            </View>
            <View style={{
                width: 290,
                height: 15,
                borderWidth: 0.4,
                borderColor: '#fff',
                borderRadius: 50,
                marginTop: 6,
                marginBottom: 6,
                marginRight: 35
            }}

                onTouchStart={e => press(e.nativeEvent)}
            >
                <View
                    style={{
                        width: progress,
                        height: 15,
                        borderWidth: 0.4,
                        borderColor: '#fff',
                        backgroundColor: '#ff532c',
                        borderRadius: 50
                    }}
                >
                </View>
            </View>

            <View style={styles.controlerAudio}>
                <View>
                    <Ionicons
                        name="play-back"
                        size={38}
                        color="white"
                        onPress={() => backMusic()}
                    />
                </View>


                <View
                    style={{
                        display: status === 'Tocando' ? 'flex' : 'none'
                    }}
                >
                    <Ionicons
                        name="pause-circle"
                        size={48}
                        color="white"
                        onPress={() => PressPauseSongs()}
                    />
                </View>


                <View
                    style={{
                        display: status === 'Pausado' ? 'flex' : 'none'
                    }}
                >
                    <Ionicons
                        name="play-circle"
                        size={48}
                        color="white"
                        onPress={() => PressPlaySongs()}
                    />
                </View>
                <View>
                    <Ionicons
                        name="play-forward"
                        size={38}
                        color="white"
                        onPress={() => advanceMusic()}
                    />
                </View>

            </View>
            <View>

            </View>
        </View>
    );
};

//make this component available to the app
export default Footer;
