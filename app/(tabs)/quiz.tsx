import { ScrollView, View, Text, Image, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Bank from './bank'

const Quiz = () => {
  let [ current, setCurrent ] = useState(0);
  let [ timer, setTimer ] = useState(10); 
  let [ score, setScore ] = useState(0);
  let [ hasStarted, setHasStarted ] = useState(false);
  let arr = []
  for (let i = 0; i < Bank.length; i++) {
    arr.push(Bank[i].options);
  }
  function startQuiz () {
    setHasStarted(true);
    // generate report
  }
  function generateScore () {

  }
  function endQuiz () {
    setHasStarted(false);
    generateScore();
  }

  useEffect(() => {
    if (hasStarted) {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    setCurrent( prevQuestion => prevQuestion + 1 );
                    return 10;
                }
            })
        }, 1000);

        return () =>  clearInterval(interval);
    }
  }, [current, hasStarted])
  

  return (
    <ScrollView className="bg-emerald-300">
      <Text className="font-pthin text-4xl text-center m-5"> Quiz </Text>
      {/* <TouchableOpacity onPress={startQuiz}> <Text> Start/end the quiz. </Text> </TouchableOpacity> */}
      <Button loading={true} className="w-80 m-8 bg-emerald-700" buttonColor="#003300" mode="contained-tonal" onPress={startQuiz} title="Start the quiz">
      </Button>
      { hasStarted && current < Bank.length ?
        <View>
            <Text className="font-pmedium text-2xl text-emerald-800 m-5 text-center"> Question Card </Text>
            <Text className="font-pbold text-lg text-emerald-800"> { current + 1 }) { Bank[current]['description'] } </Text>
            <Text className="font-pregular text-base text-emerald-800 text-center m-5"> Time remaining: { timer } </Text>
            { arr[current].map((info, key) => <Text className="font-pregular text-sm text-emerald-800"> Option {key+1}: {info} </Text>)  }
            
        </View> : 
        <View>
          <Text className="font-pbold text-sm text-emerald-800"> Prepare yourself... </Text>
        </View>
      } 
      <Button loading={true} className="w-80 m-8 bg-emerald-700" buttonColor="#003300" mode="contained-tonal" onPress={endQuiz} title="End the quiz"></Button>
    </ScrollView>
  )
}

export default Quiz