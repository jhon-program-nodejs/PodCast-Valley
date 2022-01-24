//import liraries
import React, { useState } from 'react';
import { View, Text} from 'react-native';
import styles from './style'
import { Fontisto } from '@expo/vector-icons';


const HeaderTitle = () => {


    return (
        <View style={styles.container}>
            <Fontisto name="headphone" size={24} color="#ea99a2" />
            <Text 
            style={styles.text}
            >Podcast Valley</Text>
        </View>
    );
};


export default HeaderTitle;
