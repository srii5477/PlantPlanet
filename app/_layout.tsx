import { StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './(tabs)/index';

const Stack = createNativeStackNavigator();



export default function RootLayout() {
  return (
    <>
    <Text> Hello </Text>
    <Stack.Navigator>
      <Stack.Screen name="index" component={Index} options={{ headerShown: false }} />
    </Stack.Navigator>
    <Text> Sridevi </Text>
    </>
  )
} 
