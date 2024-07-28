import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const Profile = () => {
  return (
    <ScrollView className="bg-emerald-200 ">
      <Text className="font-plight text-4xl text-center m-10 text-pink-950">Profile</Text>
      <Text className="font-pthin text-3xl text-center text-pink-950"> Sridevi Shankar </Text>
      <TextInput className="m-5 bg-emerald-700" label="Send a message." />
      <Button loading={true} className="w-80 m-8 bg-emerald-700" buttonColor="#003300" mode="contained-tonal" onPress={() => console.log('Pressed')}>
        Press me
      </Button>
      <Text className="font-plight text-pink-950 text-xl m-5">I have been an active user on PlantPlanet since 2014. I have learnt 1234+ facts and I have succesfully grown 120 different species of plants. My most recent harvests include:
      </Text>

      <Text className="font-plight text-lg m-5 text-pink-950 text-center">
        1. Oranges {"\n"}
        2. Bananas {"\n"}
        3. Kiwis {"\n"}
        4. Peas {"\n"}
        5. Coconuts {"\n"}
        6. Plums {"\n"}
      </Text>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({})