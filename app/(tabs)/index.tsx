import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Slot, Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';


const Index = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-emerald-300">
      <Text className="text-emerald-700 text-4xl font-plight">Welcome to PlantPlanet</Text>
      <TouchableOpacity>
      <Button
          title="View Profile"
          onPress={() =>
            navigation.navigate('Profile')
          }
          
      />
      </TouchableOpacity>
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
          title="BookMarks"
          onPress={() =>
            navigation.navigate('BookMark')
          }
        />
      </TouchableOpacity>
    </View>
  )
}

export default Index

