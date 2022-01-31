import { StyleSheet } from 'react-native';



// define your styles
const styles = StyleSheet.create({
    containerMain: {

        width: '100%',
        height: '80%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#8257e5',
        borderWidth:.4,
        borderColor: '#fff'
    },
    containerUpload: {
        width: '70%',
        height:70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6581d',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    ButtonLastReleases: {
        width:'100%',
        marginLeft:'30%',
        textAlign:'center',
        marginTop:30,
        
       
    },
    buttonOne:{
        width:'70%',
        height:70,
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#0d27c7',
        borderColor:'#fff'
        },
    buttonTwo:{
        width:'70%',
        height:70,
        borderRadius:10,
        backgroundColor:'#0a921e',
        borderWidth:1,
        borderColor:'#fff',

        },
    textMainUpload: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 14,
        fontFamily:'serif',
    },
});

export default styles;
//make this component available to the app