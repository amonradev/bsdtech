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
            })
        }
        fetchData()
    }, [])
    return (
        <Scroll>
            <BackgroundImage>
                <View>
                    {data.map((object) => {
                        return <OdsList object={object} />
                    })}
                    <Text>
                    </Text>
                </View>
            </BackgroundImage>
        </Scroll>
    )
}