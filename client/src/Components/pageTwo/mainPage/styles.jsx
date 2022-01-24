import { Dimensions, StyleSheet } from 'react-native';

const widthDimensions= Dimensions.get('window').width

// define your styles
const styles = StyleSheet.create({
    containerMainTwo: {
        flex:1,
        width:widthDimensions,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .4,
        borderColor: '#fff'
    },
    containerMain: {
        width: '100%',
        height:50,
        justifyContent: 'center',
        backgroundColor: '#8257e5',
        borderWidth: .4,
        borderColor: '#fff',
        borderRadius:50,
        marginTop:2
    },
    
    musicContainer: {
        width:widthDimensions,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
    });

export default styles;
//make this component available to the app