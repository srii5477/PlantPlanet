import { Text, View } from 'react-native'
import React from 'react'
import { Slot, Link } from 'expo-router';

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>HomePage</Text>
      <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  )
}

export default Index

