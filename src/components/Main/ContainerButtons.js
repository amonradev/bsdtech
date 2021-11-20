import React from "react"
import { ButtonMain } from "./ButtonMain"
import { Text, View } from "react-native"
import { style } from "./style"

export const ContainerButtons = ({navigation}) => {

    return (
        <>
            <View style={style.ContainerCima}>
                <ButtonMain nameIcon="reader-outline" nomeBotao="  ODS" func={() => navigation.navigate('Login')} />
                <ButtonMain nameIcon="calendar-outline" nomeBotao="  Histórico" />
            </View>
            <View style={style.ContainerBaixo}>
                <ButtonMain nameIcon="logo-youtube" nomeBotao=" Tutorial" />
                <ButtonMain nameIcon="ribbon-outline" nomeBotao="  Garantia" />
            </View>
            <View style={style.Maps}>
                <Text>
                    Aqui ficará o maps
                </Text>
            </View>
        </>
    )
}