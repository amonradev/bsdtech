import React from "react"
import { View, Text } from 'react-native'
import { BackgroundImage } from "../../components/Main/BackgroundImg"
import { Scroll } from "../../components/Scroll"
import { ConfigButton } from "../../components/TabComponents/ConfigButton"
import { style } from "./style"


export const Settings = ({navigation}) => {

    return (
        <Scroll>
            <BackgroundImage>
                <View style={style.Container}>
                    <ConfigButton Texto="Excluir minha Conta" />
                    <ConfigButton Texto="Sair da Conta" />
                </View>
            </BackgroundImage>
        </Scroll>
    )
}