import { SafeAreaView, ScrollView, View, Text, Image, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Popover from 'react-native-popover-view';

const Explore = () => {
  let [ list, setList ] = useState([])
  let [ card, setCard ] = useState()
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
  function func(key: Number) {
    
  }
  return (
		<SafeAreaView>
			<ScrollView className="bg-green-400">
				<Text className="font-pthin text-3xl text-center m-20">Explore</Text>
				<View>
					<ImageBackground
						source={require("../../assets/images/png.jpg")}
						style={{ width: 500, height: 200 }}
					/>
				</View>
				<View className="align-middle m-10">
					{list.map((info, key) => (
            <View>
						<Text className="text-emerald-800 font-pbold text-center m-5">
							{key + 1}: {info["common_name"]} or {""}
							{info["scientific_name"] || info["other_name"]} {"\n\n"}
            </Text>
            <View>
							{info["default_image"] && (
								<Image
									source={{ uri: info["default_image"]["original_url"] }}
									style={{ width: 200, height: 200, marginLeft: 55 }} 
								/>
							)}
            </View>
						<Popover
								from={
									<TouchableOpacity>
										<Text className="text-center font-pbold text-emerald-900 m-5">Know more.</Text>
									</TouchableOpacity>
								}
						>
								<Text>
                  <Text> Hi! This is a/an { card.description}. </Text>
                  <Text> This plant is { card.cycle }. </Text>
                  <Text> I need { card.watering } watering. </Text>
                  <Text> As for sunlight, I need { card.sunlight[0] }. </Text>
                  <Text> I have a { card.anatomy[0].bark } bark and { card.anatomy[1].leaves} leaves.</Text>
                  <Text> I do { !card.flowers && <Text>not</Text> } bear flowers. </Text>
                  <Text> I do { !card.fruits && <Text>not</Text> } bear fruits. </Text>
                  <Text> I need { card.care_level } care level. </Text>
                </Text>
						</Popover>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Explore