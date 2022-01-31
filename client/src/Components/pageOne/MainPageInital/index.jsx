import React, { useEffect, useState } from 'react';
import { View, Text, Navi } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import Axios from 'axios';




// create a component
const MainPageInital = ({ route, navigation }) => {


    const postSongNames = async () => {
        const formatDate = date => {
            let day = date.getDate()
            let month = date.getMonth()
            let year = date.getFullYear()
            return `${String(day).length == 1 ? `0${day}` : `${day}`}/${String(month).length == 1 ? `0${month + 1}` : `${month}`}/${year}`
        }
        let today = new Date();

        let date = formatDate(today)
        let hours = today.toTimeString('pt-BR');
        let formatedHours = hours.slice(0, 8)

        const fileIformation = await DocumentPicker.getDocumentAsync({ type: 'audio/*' })
        console.log(fileIformation);
        Axios.post('http://192.168.1.12:4000/sendMusic', {
            name: fileIformation.name,
            uri: fileIformation.uri,
            date: date,
            hours: formatedHours,

        })
      
    }



    return (
        <View style={styles.containerMain}>

            <View style={styles.containerUpload}
                onTouchStart={() => navigation.push('pageTwo')}
            >
                <Text style={styles.textMainUpload} >PodCasts</Text>
            </View>

            <View style={styles.ButtonLastReleases} >
                <Button
                    buttonStyle={styles.buttonOne}
                    title='Ultimos Lançamentos'
                    onPress={() => navigation.navigate('PageLastReleases')}
                />

            </View>

            <View style={styles.ButtonLastReleases} >
                <Button
                    buttonStyle={styles.buttonTwo}
                    title='Carregar podcasts'
                    onPress={() => postSongNames()}
                />

            </View>

        </View>
    );
};



export default MainPageInital;
