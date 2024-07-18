import { Text, View, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useState } from 'react'


const Feed = () => {
  let [ img, setImg ] = useState(0);
  var reqImages = [
    require('../../assets/images/435268.jpg'),
    require('../../assets/images/autumn.jpg'),
    require('../../assets/images/patio.jpg'),
    require('../../assets/images/spruce.jpg')
  ]
  function changeImage () {
    setImg((img+1)%4);
  }
  return (
    <SafeAreaView>
    <ScrollView className="bg-emerald-300">
      <Text className="m-5 font-plight text-4xl text-emerald-800 text-center">Feed</Text>
      <Text className="font-plight text-base text-emerald-800 text-center">Go through some amazing plant facts, curated just for you.</Text>
      <TouchableOpacity onPress={changeImage}>
        <Image
          source={
            reqImages[img]
          }
          style={{width: 200, height: 200}}
          className="m-20"
        />
      </TouchableOpacity>
      <Text className="font-plight text-base text-emerald-900 mx-10">
        1. Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. {"\n\n"}
        2. They obtain their energy from sunlight, using chloroplasts derived from endosymbiosis with cyanobacteria to produce sugars from carbon dioxide and water, using the green pigment chlorophyll. {"\n\n"}
        3. The world's tallest living tree is the coast redwood (Sequoia sempervirens), which grows along the Pacific Coast of the United States, mainly in California. Interestingly enough, it's not the world's oldest growing tree; that award goes to a bristlecone pine (Pinus aristata). {"\n\n"}
        4. Vanilla flavoring comes from the pod of an orchid, Vanilla planifolia. Though the pods are called vanilla beans, they're not actually in the legume family like green beans. {"\n\n"}
        5. The word pineapple comes from European explorers who thought the fruit combined the look of a pinecone with flesh similar to an apple. Pineapples are the only edible members of the bromeliad family. {"\n\n"}
        6. From a botanical standpoint, avocados and pumpkins are fruits, not vegetables, because they bear the plants' seeds. Rhubarb, on the other hand, is a vegetable. 
      </Text>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Feed