//import liraries
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderTitle from '../../src/Components/pageOne/Header/index'; 
import MainPageInital from '../../src/Components/pageOne/MainPageInital/index';
import Footer from '../../src/Components/pageOne/footer/index';


// create a component
const InitailPage = () => {

 return  (
        <View style={styles.container}>
          <HeaderTitle/>
          <MainPageInital/>
          <Footer/>
        </View>
      );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
});

//make this component available to the app
export default InitailPage;
