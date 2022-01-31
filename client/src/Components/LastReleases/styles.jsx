import { Dimensions, StyleSheet } from 'react-native';

const widthDimensions= Dimensions.get('window').width

// define your styles
const styles = StyleSheet.create({
    containerMainTwo: {
        flex:1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .4,
        borderColor: '#fff'
    },
    containerMain: {
        width: '100%',
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#8257e5',
        borderWidth: .1,
        borderColor: '#fff',
        marginTop:1
    },
    
    musicContainer: {
        width:widthDimensions,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    });

export default styles;
//make this component available to the app