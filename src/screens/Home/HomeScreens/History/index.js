import React from "react"
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import LottieView from 'lottie-react-native'
export const History = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <LottieView source={require('../../../../img/lottie.json')} autoPlay loop style={{width: 300}} />
        </View>
        <Text>
          DKSDOPKSODKASODKASDKAOK
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}