import React from "react"
import { ButtonMain } from "./ButtonMain"
import { Text, View } from "react-native"
import { style } from "./style"

export const ContainerButtons = ({navigation}) => {

    return (
        <>
            <View style={style.ContainerCima}>
                <ButtonMain nomeBotao="ODS" func={() => navigation.navigate('Login')} />
                <ButtonMain nomeBotao="Histórico" />
            </View>
            <View style={style.ContainerBaixo}>
                <ButtonMain nomeBotao="Tutorial" />
                <ButtonMain nomeBotao="Garantia" />
            </View>
            <View style={style.Maps}>
                <Text>
                    Aqui ficará o maps
                </Text>
            </View>
        </>
    )
}