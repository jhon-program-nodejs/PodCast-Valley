import React from 'react'
import { StyleSheet } from 'react-native';

// define your styles
const styles = StyleSheet.create({

    container: {
        width:'100%',
        height:'20%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',     
        backgroundColor:'#8257e5',   
        borderWidth:1,
        borderColor:'#fff',
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,

    },
    controlerAudio: {
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',     
        marginBottom:8,
    },
   describleAudio: {
        flexDirection:'row',
        justifyContent: 'center',
        padding:4,
        alignItems: 'center',     
        
    },
    viewContainerText: {
        width:'50%',
        flexDirection:'row',
        justifyContent: 'center',
        padding:4,
        alignItems: 'center',     
        
    },
    textTitle: {
      color:'#fff',
      fontSize:14,
    },
    textRefMusic : {
      marginLeft:10,
      color:'#0ef90e',
      fontSize:14,
    },
    textRefStatusRed : {
      marginLeft:10,
      color:'#Fd0606',
      fontSize:14,
    },
    textRefStatusGreen : {
      marginLeft:10,
      color:'#00ff00',
      fontSize:14,
    }
});

export default styles;
//make this component available to the app