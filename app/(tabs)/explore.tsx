import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import React from 'react'
import dotenv from 'dotenv';
import { useState, useEffect } from 'react'

dotenv.config();

const Explore = () => {
  let [ list, setList ] = useState([])
  let api_key = process.env.api_key
  let url = `https://perenual.com/api/species-list?key=${api_key}`
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setList(json.data)
  })
      .catch((error) => console.error(error))
  }, []);
  
  return (
    <SafeAreaView>
      <ScrollView className="bg-emerald-300">
        <Text className="font-pthin text-3xl text-center m-20">Explore</Text>
        <View className="align-middle">
          { list.map( (info) => <Text> {info['common_name']} or {info['scientific_name'] || info['other_name']} {"\n\n"} </Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore