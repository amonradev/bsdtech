import axios from "axios"
import React, { useState, useEffect } from "react"
import { View, SafeAreaView, ScrollView } from 'react-native'
import { OdsList } from "../../../../components/HomeScreensComponents/OdsList"
import { style } from './style'
import LottieView from 'lottie-react-native'
import { BackTop } from "../../../../components/HomeScreensComponents/BackTop"


export const Ods = ({navigation}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        function fetchData() {
            axios({
                url: "https://node-amarrado.herokuapp.com/services",
                method: "GET"
            }).then((res) => {
                setData(res.data)
            }).catch((error) => {
                console.log(error)
            })
        }
        fetchData()

    }, [''])
    if (data.length >= 1) {
        var flag = 1
    }
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: "#1a202c", }}>
            <BackTop page="Ordem de Serviço" navigation={navigation} />
                    {flag != 1 ? <View style={style.LottieContainer}><LottieView source={require('../../../../img/lottie.json')} autoPlay loop style={style.Lottie} /></View> :
                        <>
                            {data.length >= 1 ? <OdsList object={data[0]} /> : <></>}
                            {data.length >= 2 ? <OdsList object={data[1]} /> : <></>}
                            {data.length >= 3 ? <OdsList object={data[2]} /> : <></>}
                            {data.length >= 4 ? <OdsList object={data[3]} /> : <></>}
                            {data.length >= 5 ? <OdsList object={data[4]} /> : <></>}
                            {data.length >= 6 ? <OdsList object={data[5]} /> : <></>}
                            {data.length >= 7 ? <OdsList object={data[6]} /> : <></>}
                            {data.length >= 8 ? <OdsList object={data[7]} /> : <></>}
                            {data.length >= 9 ? <OdsList object={data[8]} /> : <></>}
                            {data.length >= 10 ? <OdsList object={data[9]} /> : <></>}
                        </>}
            </ScrollView>
        </SafeAreaView>
    )
}