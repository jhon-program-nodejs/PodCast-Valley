import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, RefreshControl, Image } from 'react-native';
import styles from './styles';
import HeaderPageTwo from '../../Components/pageOne/Header/index'
import { Ionicons } from '@expo/vector-icons';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';

let conter = 0
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

        data.forEach((objMusic, indicie) => {
            if (indicie + 1 <= 10) {
                let { hours, name, uri, id } = objMusic
                let nameFormated = name.slice(0, 12) + '...'
                let orderFormated = `${indicie + 1}º`
                response.push({ nameFormated, hours, uri, orderFormated })

            }
        })
        conter = response.length
        setMusics(response)
        responsePlayer = response
        response = []
        conter = 0

    }
    return (
        <View style={styles.containerMainTwo}>
            <HeaderPageTwo
            />
            <ScrollView
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >

                {

                    musics.map(music => (
                        <View style={styles.containerMain}
                            key={++conter}
                            onPress={() => {
                                navigation.navigate('PageDisplayMusic', {
                                    name: music.nameFormated,
                                    uri: music.uri,
                                    res: responsePlayer

                                })
                            }}
                        >
                            <View style={styles.musicContainer}
                            >
                                <View style={{ margin: 6 }}>
                                    <Text
                                        style={{ fontSize: 18, color: '#d2802e', backgroundColor: '#fff', fontWeight: 'bold', padding: 12, borderRadius: 50 }}
                                    >{music.orderFormated}</Text>
                                </View>
                                <View style={{ margin: 6, backgroundColor: '#fff', padding: 15, borderRadius: 20 }}>
                                    <Text
                                        style={{ marginLeft: 10, fontSize: 20, color: '#000' }}
                                        onPress={() => {
                                            navigation.navigate('PageDisplayMusic', {
                                                name: music.nameFormated,
                                                uri: music.uri,
                                                res: responsePlayer

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
                                                res: responsePlayer


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
