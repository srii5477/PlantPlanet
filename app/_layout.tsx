import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Index from './(tabs)/index';
import Profile from './(tabs)/profile';
import Feed from './(tabs)/feed';
import Map from './(tabs)/map';
import Explore from './(tabs)/explore';
import Quiz from './(tabs)/quiz'
import { PaperProvider } from 'react-native-paper';


SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require('../assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
    "Poppins-Thin": require('../assets/fonts/Poppins-Thin.ttf')
  });
  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
    
  }, [fontsLoaded, error]);

  if(!fontsLoaded && !error)  return null;  
  return (
    <PaperProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    
  )
} 
