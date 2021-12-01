import React from "react"
import { View, Text } from 'react-native'
import { BackTop } from "../../../../components/HomeScreensComponents/BackTop"
import { BackgroundImage } from "../../../../components/Main/BackgroundImg"
import { ContainerTutos } from "../../../../components/Main/ContainerTutos"
import { Scroll } from "../../../../components/Scroll"

export const Tutorial = ({navigation}) => {

    return(
        <Scroll>
            <BackTop page="Tutoriais" navigation={navigation} />
            <View>
                <ContainerTutos titulo="Teste" desc="teste" link="https://google.com" />
                <ContainerTutos titulo="Teste" desc="teste" link="https://google.com" />
            </View>
        </Scroll>
    )
}