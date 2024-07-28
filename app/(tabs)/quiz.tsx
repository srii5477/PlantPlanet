import { ScrollView, View, Text, Image, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Bank from './bank'

const Quiz = () => {
  let [ current, setCurrent ] = useState(0);
  let [ timer, setTimer ] = useState(10); 
  let [ hasStarted, setHasStarted ] = useState(false);

  function startQuiz () {
    let newValue = !hasStarted;
    setHasStarted(newValue);
    // generate report
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
    <ScrollView className="bg-emerald-600">
      <Text> Quiz </Text>
      {/* <TouchableOpacity onPress={startQuiz}> <Text> Start/end the quiz. </Text> </TouchableOpacity> */}
      <Button loading={true} className="w-80 m-8 bg-emerald-700" buttonColor="#003300" mode="contained-tonal" onPress={startQuiz} title="Start/end the quiz">
      </Button>
      { hasStarted ?
        <View>
            <Text> Question Card </Text>
            <Text> { Bank[current]['description'] } </Text>
            { Bank.map((info, key) => }
        </View> : <Text> xyz </Text>
      } 
    </ScrollView>
  )
}

export default Quiz