import React from 'react'
import { View, Text } from 'react-native'
import { style } from './style'

export const OdsList = ({object}) => {

    return (
        <View style={style.Container}>
            <Text>{object.produto}</Text>
            <Text>{object.descricao}</Text>
            <Text>{object.preco_mobra}</Text>
            <Text>{object.preco_peca}</Text>
            <Text>{object.data_entrada}</Text>
            <Text>{object.data_saida}</Text>
        </View>
    )
}