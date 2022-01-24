//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,StyleSheet } from 'react-native';
import ComponetsPageTwo from '../../src/Components/pageTwo/mainPage/index'

// create a component
const pageTwo = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ComponetsPageTwo/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default pageTwo;
