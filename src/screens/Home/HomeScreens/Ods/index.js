import axios from "axios"
import React, { useState, useEffect } from "react"
import { View, Text } from 'react-native'
import { OdsList } from "../../../../components/HomeScreensComponents/OdsList"
import { BackgroundImage } from "../../../../components/Main/BackgroundImg"
import { Scroll } from "../../../../components/Scroll"

export const Ods = () => {
    const [data, setData] = useState([])
    useEffect(() => {
                async function fetchData() {
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
    if(data.length >= 1){
        var flag = 1
    }
    return (
        <Scroll>
            <BackgroundImage>
                <View>
                    <Text>
                        Suas três últimas ordens de serviço
                    </Text>
                    {flag != 1 ? <View><Text>Carregando</Text></View> :
                    <View>
                        <OdsList object={data[0]} />
                        <OdsList object={data[1]} />
                        <OdsList object={data[2]} />
                    </View>}

                    <Text>
                    </Text>
                </View>
            </BackgroundImage>
        </Scroll>
    )
}