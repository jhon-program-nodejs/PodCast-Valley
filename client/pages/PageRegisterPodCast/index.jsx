//import liraries
import React from 'react';
import { View,TouchableOpacity ,Text , StyleSheet } from 'react-native';
import Header from '../../src/Components/pageOne/Header/index';
import LottieView from 'lottie-react-native'
import podcastAnimator from '../../assets/registerPodcats.json'
import style from './style'

// create a component
const RegisterPodcast = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={style.containerAnimation}>
                <LottieView
                source={podcastAnimator}
                loop
                autoPlay
                style={{width:200,height:200}}
                />
                
            </View>
            <TouchableOpacity
            style={style.buttonOpacity}
            >
                <Text style={style.textButton}>Selecionar podcast</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#8257e5',
    },
});

//make this component available to the app
export default RegisterPodcast;
