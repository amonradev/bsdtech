import axios from "axios"
import React, { useEffect, useState } from "react"
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { BackTop } from "../../components/HomeScreensComponents/BackTop"
import LottieView from 'lottie-react-native'
import { style } from "./style"
import { OdsList } from "../../components/HomeScreensComponents/OdsList"
import { Scroll } from "../../components/Scroll"
import { BackgroundImage } from "../../components/Main/BackgroundImg"
import { NotificationsTabs } from "../../components/Main/NotificationsTabs"

export const Notifications = ({ navigation }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        function fetchData() {
            axios({
                url: "https://node-amarrado.herokuapp.com/notifications",
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
            <Scroll>
                <BackgroundImage>
                    <View style={style.ContainerPrincipal}>
                    <BackTop page="Notificações" navigation={navigation} />
                    {flag != 1 ? <View style={style.LottieContainer}><LottieView source={require('../../img/lottie.json')} autoPlay loop style={style.Lottie} /></View> :
                        <>
                            {data.length >= 1 ? <NotificationsTabs object={data[0]} navigation={navigation} /> : <></>}
                            {data.length >= 2 ? <NotificationsTabs object={data[1]} navigation={navigation} /> : <></>}
                            {data.length >= 3 ? <NotificationsTabs object={data[2]} navigation={navigation} /> : <></>}
                            {data.length >= 4 ? <NotificationsTabs object={data[3]} navigation={navigation} /> : <></>}
                            {data.length >= 5 ? <NotificationsTabs object={data[4]} navigation={navigation} /> : <></>}
                            {data.length >= 6 ? <NotificationsTabs object={data[5]} navigation={navigation} /> : <></>}
                            {data.length >= 7 ? <NotificationsTabs object={data[6]} navigation={navigation} /> : <></>}
                            {data.length >= 8 ? <NotificationsTabs object={data[7]} navigation={navigation} /> : <></>}
                            {data.length >= 9 ? <NotificationsTabs object={data[8]} navigation={navigation} /> : <></>}
                            {data.length >= 10 ? <NotificationsTabs object={data[9]} navigation={navigation} /> : <></>}
                        </>}

                    <Text>
                    </Text>
                    </View>
                </BackgroundImage>
            </Scroll>
    )
}