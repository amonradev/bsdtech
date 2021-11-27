import axios from "axios"
import LottieView from "lottie-react-native"
import React, { useEffect, useState } from "react"
import {View, ScrollView, SafeAreaView, Text, TouchableOpacity} from 'react-native'
import { HistoryList } from "../../../../components/HomeScreensComponents/HistoryList"
import { style } from "./style"
import Icon from 'react-native-vector-icons/Ionicons'
import { BackTop } from "../../../../components/HomeScreensComponents/BackTop"
Icon.loadFont();

export const History = ({navigation}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        function fetchDataHistory () {
            axios({
                url: "https://node-amarrado.herokuapp.com/services",
                method: "GET"
            }).then((res) => {
                setData(res.data)
            }).catch((error) => {
                console.log(error)
            })
        }

      fetchDataHistory()
    }, [''])
    if (data.length >= 1) {
        var flag = 1
    }
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: "#1a202c"}}>
            <View>
                    <BackTop page="Histórico" navigation={navigation} />
                    {flag != 1 ? <View style={style.LottieContainer}><LottieView source={require('../../../../img/lottie.json')} autoPlay loop style={style.Lottie} /></View> :
                        <>
                            {data.length >= 1 ? <HistoryList object={data[0]} /> : <></>}
                            {data.length >= 2 ? <HistoryList object={data[1]} /> : <></>}
                            {data.length >= 3 ? <HistoryList object={data[2]} /> : <></>}
                            {data.length >= 4 ? <HistoryList object={data[3]} /> : <></>}
                            {data.length >= 5 ? <HistoryList object={data[4]} /> : <></>}
                            {data.length >= 6 ? <HistoryList object={data[5]} /> : <></>}
                            {data.length >= 7 ? <HistoryList object={data[6]} /> : <></>}
                            {data.length >= 8 ? <HistoryList object={data[7]} /> : <></>}
                            {data.length >= 9 ? <HistoryList object={data[8]} /> : <></>}
                            {data.length >= 10 ? <HistoryList object={data[9]} /> : <></>}
                        </>}

                    <Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}