//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderDisplay from '../../src/Components/pageOne/Header/index'
import DisplayPlayer from '../../src/Components/Display/displayPlayer/index'
import AnimatedCompoets from '../../src/Components/Display/AnimatedCompoets';
// create a component
const PageDisplayMusic = ({route,navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderDisplay />
            <AnimatedCompoets
            />
            <DisplayPlayer 
            route = {route}
            navigation = {navigation}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default PageDisplayMusic;
