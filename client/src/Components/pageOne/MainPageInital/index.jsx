import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { CommonActions, useNavigation } from '@react-navigation/native';



// create a component
const MainPageInital = () => {
    const navigation = useNavigation()

    const mudardetela = ()=>{
        console.log('aqui estamos');
      navigation.dispatch(CommonActions.reset({
        index:0,
        routes:[{name:'pageTwo'}]
      }))
    }

    // useEffect(()=>{

    // },[mudardetela])
    return (
        <View style={styles.containerMain}>
            <View style={styles.containerUpload}
                onTouchStart={mudardetela}
            >
                <Text style={styles.textMainUpload} >Carreagar PodCast</Text>
            </View>
        </View>
    );
};



export default MainPageInital;
