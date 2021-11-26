import React from 'react'
import { Text, View } from 'react-native'
import { style } from './style'
import { CardText } from './CardText'
export const OdsList = ({ object }) => {

    return (
        <View style={style.Container}>
            <CardText style={{
                color: "#fff",
                fontSize: 27
            }}
                text={object.produto} />
            <View style={style.DescContainer}>
                <CardText style={{
                    color: "#fff",
                    fontSize: 15
                }}
                    text={object.descricao} />

            </View>
            <View style={style.TextContainer}>
                <CardText style={{
                    color: "#fff",
                    fontSize: 17
                }}
                    money="R$ "
                    text={object.valor_total} />
                <CardText style={{ color: "#fff", fontSize: 17 }}
                    text={object.data_saida} />
            </View>
        </View>
    )
}