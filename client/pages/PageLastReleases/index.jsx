//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PageLastReleases from '../../src/Components/LastReleases/index'



// create a component
const pageTwo = ({route,navigation}) => {
    
  
    return (
        <View style={styles.container}>
            <PageLastReleases
            navigation={navigation}
            route = {route}
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default pageTwo;
