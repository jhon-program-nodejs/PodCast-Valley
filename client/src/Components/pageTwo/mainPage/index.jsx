import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, RefreshControl, Image } from 'react-native';
import styles from './styles';
import HeaderPageTwo from '../../pageOne/Header/index'
import { Ionicons } from '@expo/vector-icons';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';



let counter = 0
let response = []
let responsePlayer;


// create a component
const MainPageInital = ({ route, }) => {


    const navigation = useNavigation()

    const [musics, setMusics] = useState([])

    const [refreshing, setRefreshing] = React.useState(false);

    const [sound, setSound] = useState();

    useEffect(() => {
        getSongNames()
    }, []);

  


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {

            setRefreshing(false)
        }, 2000)
    }, []);


    const getSongNames = async () => {
        const music = await Axios.get('http://192.168.1.12:4000/getMusic')

        const { data } = music
        data.forEach((objMusic, index) => {
            let { date, hours, name, uri } = objMusic
            let nameFormated = name.slice(0, 12) + '...'
            let dateFormated = date.slice(0, 5)
            response.push({ nameFormated, hours, uri, dateFormated, index:index })
        })
        counter = response.length
        setMusics(response)
        responsePlayer = response
        response = []
        counter = 0

    }
    return (
        <View style={styles.containerMainTwo}>
            <HeaderPageTwo
            />
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >

                {

                    musics.map((music,indicie) => (
                        <View style={styles.containerMain}
                            key={++counter}
                            onPress={() => {
                                navigation.navigate('PageDisplayMusic', {
                                    name: music.nameFormated,
                                    uri: music.uri,
                                    res:responsePlayer,
                                    index:indicie


                                })
                            }}
                        >
                            <View style={styles.musicContainer}
                            >
                                <View style={{ margin: 6 }}>
                                    <Text
                                        style={{ marginLeft: 10, fontSize: 19, color: '#d2802e', fontWeight: 'bold' }}
                                    >{music.dateFormated}</Text>
                                </View>
                                <View style={{ margin: 6 }}>
                                    <Text
                                        style={{ marginLeft: 10, fontSize: 20, color: '#fff' }}
                                        onPress={() => {
                                            navigation.navigate('PageDisplayMusic', {
                                                name: music.nameFormated,
                                                uri: music.uri,
                                                res:responsePlayer,
                                                index:indicie

                                            })
                                        }}
                                    >{music.nameFormated}</Text>
                                </View>
                                <View style={{ margin: 6 }}
                                >
                                    <Ionicons name="md-musical-notes-sharp" style={{ borderWidth: 0.3, padding: 5, borderRadius: 50, backgroundColor: '#fff' }} size={38} color="#d2802e"
                                        onPress={() => {
                                            navigation.navigate('PageDisplayMusic', {
                                                name: music.nameFormated,
                                                uri: music.uri,
                                                res:responsePlayer,
                                                index:indicie

                                            })
                                        }}
                                    />

                                </View>
                            </View>

                        </View>
                    ))
                }
            </ScrollView>

        </View>
    );
};



export default MainPageInital;
