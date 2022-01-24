import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import HeaderPageTwo from '../../pageOne/Header/index'
import { FontAwesome } from '@expo/vector-icons';
// import { Audio } from 'expo-av';
import Axios from 'axios'

const musicOne = '../../../../assets/musics/A-Casa-E-Sua-Casa-Worship.mp3'
let namesFiles = []
let conter = 0


const getSongNames = async () => {
    try {
        const response = await Axios.get('http://192.168.1.12:4000/namesSonds')
        const { data } = response
        namesFiles.push(...data)
        return namesFiles

    } catch (error) {
        console.log(error);

    }
}

getSongNames()





// create a component
const MainPageInital = () => {
    const [namesMusics, setNamesMusics] = useState(namesFiles)
    function playSound() {
        console.log(namesFiles);
        // const { sound } = await Audio.Sound.createAsync(
        //     require('../../../../assets/musics/A-Casa-E-Sua-Casa-Worship.mp3')
        // );

        // setSound(sound);
        // console.log('Playing Sound');
        // await sound.playAsync();
    }

    // React.useEffect(() => {
    //     return sound
    //         ? () => {
    //             console.log('Unloading Sound');
    //             sound.unloadAsync();
    //         }
    //         : undefined;
    // }, [sound]);
    return (
        <View style={styles.containerMainTwo}>

            <HeaderPageTwo />
            <ScrollView>

                {
                    namesMusics.map(musics => (
                        <View style={styles.containerMain}
                            key={conter++}
                            onTouchStart={playSound}
                        >
                            <View style={styles.musicContainer}>
                            <FontAwesome style={{marginLeft:10}} name="music" size={24} color="black" />
                            <Text style={{marginLeft:10}} >{musics}</Text>
                            </View>
                        </View>

                    ))
                }
            </ScrollView>

        </View>
    );
};



export default MainPageInital;
