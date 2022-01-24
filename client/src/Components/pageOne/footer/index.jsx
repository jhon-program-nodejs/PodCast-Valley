//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';

// create a component
const Footer = () => {

    const [nameMusic, setNameMusic] = useState('OFF')
    const [status, setStatus] = useState('OFF')

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
                        color="white" />
                </View>


                <View
                    style={{
                        display: status === 'Pausado' ? 'flex' : 'none'
                    }}
                >
                    <Ionicons
                        name="pause-circle"
                        size={38}
                        color="white" />
                </View>


                <View
                    style={{
                        display: status === 'OFF' ? 'flex' : 'none'
                    }}
                >
                    <Ionicons
                        name="reload-circle"
                        size={38}
                        color="white" />
                </View>


                <View
                    style={{
                        display: status === 'Tocando' ? 'flex' : 'none'
                    }}
                >
                    <Ionicons
                        name="play-circle"
                        size={38}
                        color="white" />
                </View>
                <View>
                    <Ionicons
                        name="play-forward"
                        size={38}
                        color="white" />
                </View>

            </View>
            <View>

            </View>
        </View>
    );
};

//make this component available to the app
export default Footer;
