//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
import { Audio } from 'expo-av';

let sondMaster;
// let response = []
let counter = 0

// create a component
const Footer = ({ route, navigation }) => {
    let { uri, name, res, index } = route.params;
    const [nameMusic, setNameMusic] = useState()
    const [status, setStatus] = useState('Tocando')
    const [soundMusic, setSoundMusic] = useState();

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

        // console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            { uri: URI },
        );

        sound.stopAsync()

        // response = [...res]
        sondMaster = sound
        setStatus('Tocando')
        setSoundMusic(soundMusic);

        await sound.playAsync();
    }


    const PressPlaySongs = () => {

        status === "Pausado" ? sondMaster.playAsync() : null
        setStatus('Tocando')

    }

    const PressPauseSongs = () => {
        status === "Tocando" ? sondMaster.pauseAsync() : null
        setStatus('Pausado')

    }



    const backMusic = async (e) => {
        if (counter > 0) {
            sondMaster.stopAsync()
            counter--
            const findElement = res.find(element => element.index == counter)
            console.log(counter);
            playSound(res[counter].uri)
            setNameMusic(findElement.nameFormated)
            return
        }
        counter = 0
    }
    const advanceMusic = e => {
        if (counter < res.length - 1) {
            sondMaster.stopAsync()
            counter++
            const findElement = res.find(element => element.index == counter)
            console.log(counter);
            setNameMusic(findElement.nameFormated)
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


            <View style={styles.controlerAudio}>
                <View>
                    <Ionicons
                        name="play-back"
                        size={38}
                        color="white"
                        onPress={(e) => backMusic(e.stopPropagation())}
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
                        onPress={(e) => advanceMusic(e.stopPropagation())}
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
