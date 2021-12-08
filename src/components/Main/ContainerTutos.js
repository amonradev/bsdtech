import React from "react"
import { style } from "./style"
import { Linking, Text, TouchableOpacity, View } from 'react-native'

export const ContainerTutos = ({titulo, link, desc}) => {
    return (
        <>
            <View style={style.CardTutorial}>
                <Text style={style.CardText}
                        onPress={() => navigation.navigate(object.Page)}>
                    {titulo}
                </Text>
                <Text style={style.CardTextMinor}
                        onPress={() => navigation.navigate(object.Page)}>
                    {desc}
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL(`${link}`)}>
                    <Text style={style.LinkText}>
                        Materia completa disponível em {link}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}