import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'

const Explore = () => {
  let [ list, setList ] = useState([])
  console.log(process.env.EXPO_PUBLIC_PERENUAL_KEY)
  let url = `https://perenual.com/api/species-list?key=${process.env.EXPO_PUBLIC_PERENUAL_KEY}`
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
        <View className="align-middle m-10">
          { list.map( (info, key) => <Text className="text-emerald-800"> {key+1}: {info['common_name']} or {info['scientific_name'] || info['other_name']} {"\n\n"} { info['default_image'] && <Image source={{ uri: info['default_image']['original_url'] }} style={{width: 200, height: 200}} /> }</Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore