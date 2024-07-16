import { Text, View, Button } from 'react-native'
import React from 'react'
import { Slot, Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';


const Index = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-lg font-pthin">HomePage</Text>
      <Button
          title="View Profile"
          onPress={() =>
            navigation.navigate('Profile')
          }
          className="font-pthin"
        />
        <Button
          title="Access Feed"
          onPress={() =>
            navigation.navigate('Feed')
          }
        />
    </View>
  )
}

export default Index

