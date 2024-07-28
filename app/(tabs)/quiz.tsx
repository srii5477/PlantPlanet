import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Bank from './bank'

const Quiz = () => {
  let [ current, setCurrent ] = useState("");
  let [ score, setScore ] = useState(0);
  let [ timer, setTimer ] = useState(10); 
  let [ hasStarted, setHasStarted ] = useState(false);
  let [ isLast, setIsLast ]=useState(false)

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
      <TouchableOpacity onPress={startQuiz}> Start/end the quiz. </TouchableOpacity>
      { hasStarted && 
        <View>
            <Text> Question Card </Text>

        </View>
      } 
    </ScrollView>
  )
}

export default Quiz