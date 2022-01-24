import { StyleSheet } from 'react-native';



// define your styles
const styles = StyleSheet.create({
    containerMain: {
        width: '100%',
        height: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8257e5',
        borderWidth:.4,
        borderColor: '#fff'
    },
    containerUpload: {
        width: '70%',
        height: '42%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#885cee',
        borderWidth:.4,
        borderStyle:'dashed',
        borderColor:'#fff',
        borderRadius:16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    textMainUpload: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 14,
        fontFamily:'serif',
    }
});

export default styles;
//make this component available to the app