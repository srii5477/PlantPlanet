import { Text, View, Button, Pressable, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { Slot, Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';



const Index = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-emerald-300">
      <ImageBackground source={ require('../../assets/images/3.jpg') } style={styles.container}>
        <Text className="text-emerald-100 text-4xl font-plight m-40 text-center">Welcome to  {"\n"} PlantPlanet</Text>
        
        <Pressable
            onPress={() =>
              navigation.navigate('Profile')
            }
            style={styles.button}
        ><Text style={styles.text}>View Profile</Text></Pressable>
        
        <TouchableOpacity>
          <Button
            title="Access Feed"
            onPress={() =>
              navigation.navigate('Feed')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="Explore"
            onPress={() =>
              navigation.navigate('Explore')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="Map"
            onPress={() =>
              navigation.navigate('Map')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            title="Quiz"
            onPress={() =>
              navigation.navigate('Quiz')
            }
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 900, 
    width: 800
  },
  text: {
    color: 'white'
  },
  button: {
    backgroundColor: 'transparent',
  }
})

export default Index

