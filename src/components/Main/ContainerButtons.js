import React from "react"
import { ButtonMain } from "./ButtonMain"
import { Text, View } from "react-native"
import { style } from "./style"

export const ContainerButtons = ({navigation}) => {

    return (
        <View style={style.ContainerTodos}>
            <View style={style.ContainerCima}>
                <ButtonMain nameIcon="reader-outline" nomeBotao="  ODS" onPress={() => navigation.navigate('Ods')} />
                <ButtonMain nameIcon="calendar-outline" nomeBotao="  Histórico" onPress={() => navigation.navigate('History')} />
            </View>
            <View style={style.ContainerBaixo}>
                <ButtonMain nameIcon="logo-youtube" nomeBotao=" Tutoriais" onPress={() => navigation.navigate('Tutorial')} />
                <ButtonMain nameIcon="business-outline" nomeBotao="  Sobre nós" onPress={() => navigation.navigate('Warranty')}/>
            </View>
            {/* <View style={style.Maps}>
                <Text>
                    Aqui ficará o maps
                </Text>
            </View> */}
        </View>
    )
}