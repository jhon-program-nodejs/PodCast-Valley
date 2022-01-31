//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
const animationLottieVIew = require('../../../../assets/registerPodcats.json')
const dimensionWidth = Dimensions.get('window').width
const dimensionHeigth = Dimensions.get('window').width

// create a component
const AnimatedCompoets = () => {
    return (
        <View style={styles.container}>
            <LottieView
            source={animationLottieVIew}
            autoPlay
            loop
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:dimensionWidth,
        height:dimensionHeigth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8257e5',
    },
});

//make this component available to the app
export default AnimatedCompoets;
