import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation, CommonActions } from '@react-navigation/core'
import Header from '../src/Components/pageOne/Header/index';
export default function App() {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{ name: 'finishedLoading' }]
            }))
        }, 5000)
    }, [])

    return (
        <View style={styles.animationContainer}>
            <View>
                <LottieView
                    /* ref={animation => {
                        this.animation = animation;
                    }} */
                    style={{
                        width: 400,
                        height: 700,
                        backgroundColor: '#8257e5',
                    }}
                    loop
                    autoPlay
                    source={require('../assets/animationInit.json')}
                // OR find more Lottie files @ https://lottiefiles.com/featured
                // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
                />
            </View>
            <View style={styles.containerTitle}>

                <Header />

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 5,
        height: '100%',
    },
    containerTitle: {
        position: 'absolute',
        width:400,
        height:'100%',
    },
    textTitle: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'serif',
        fontWeight: 'bold'
    }

});