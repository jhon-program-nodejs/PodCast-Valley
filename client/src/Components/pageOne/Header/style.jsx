import React from 'react'
import { StyleSheet } from 'react-native';

// define your styles
const styles = StyleSheet.create({

    container: {
        width:'100%',
        height:'20%',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',     
        backgroundColor:'#8257e5',   
        borderWidth:.4,
        borderColor:'#fff',
        borderTopLeftRadius:0,
        borderBottomRightRadius:0,
    },
    text: {
      color:'#fff',
      fontSize:28,
      marginLeft: 14,
    }
});

export default styles;
//make this component available to the app