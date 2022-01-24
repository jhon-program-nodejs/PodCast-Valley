//import liraries
import React, { useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native'
import { CommonActions, useNavigation } from '@react-navigation/native';
import finshLoading from '../../assets/finshLoading.json'

const size = Dimensions.get('window').width

const finishedLoading = () => {

    const navigation = useNavigation()

    const [repeating, setRepeating] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            navigation.dispatch(CommonActions.reset({
                index:0,
                routes:[{name:'initalPage'}]
            }))
        },5000) 
    },[])
    
     return (
        <View style={styles.container}>

        <LottieView
          
            style={{
                width: size,
                height: size,
                backgroundColor: '#8257e5',
            }}
            loop
            autoPlay
            // onAnimationFinish={startRapeating}
            resizeMode='contain'
            source={finshLoading}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8257e5',
    },
});

//make this component available to the app
export default finishedLoading;
