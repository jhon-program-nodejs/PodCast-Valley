import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splash from './splash/splash';
import InitailPage from './pages/initalPage/index';
import finishedLoading from './pages/finishedLoading/index';
import pageTwo from './pages/pageTwo/index';
import PageLastReleases from './pages/PageLastReleases/index';
import RegisterPodcast from './pages/PageRegisterPodCast/index';
import PageDisplayMusic from './pages/PageDisplayMusic/index'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator >

        <Stack.Screen
          name="splash"
          component={splash}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="finishedLoading"
          component={finishedLoading}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="initalPage"
          component={InitailPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PageDisplayMusic"
          component={PageDisplayMusic}
          options={{
            headerShown: false,
            title:''
          }}
        />
        <Stack.Screen
          name="PageLastReleases"
          component={PageLastReleases}
          options={{
            headerShown: false,
            title:''
          }}
        />
        <Stack.Screen
          name="pageTwo"
          component={pageTwo}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
            name="RegisterPodcast"
            component={RegisterPodcast}
            options={{
              headerShown: false,
            }}
          />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
