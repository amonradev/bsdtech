import axios from "axios"
import React, {useState, useEffect} from "react"
import { View, Text } from 'react-native'
import { OdsList } from "../../../../components/HomeScreensComponents/OdsList"
import { BackgroundImage } from "../../../../components/Main/BackgroundImg"
import { Scroll } from "../../../../components/Scroll"

export const Ods = () => {
    const [dados, setDados] = useState([])
    useEffect(async () => {
            await axios({
                url: "https://node-amarrado.herokuapp.com/services",
                method: "GET"
            }).then((res) => {
                setDados(res.data)
            })
    }, [])
    console.log(dados)
    return(
        <Scroll>
            <BackgroundImage>
                <View>
                    {dados.map((object) => {
                        return <OdsList object={object} />
                    })}
                    <Text>
                    </Text>
                </View>
            </BackgroundImage>
        </Scroll>
    )
}