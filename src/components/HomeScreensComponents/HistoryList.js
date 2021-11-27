import React from "react"
import { ImageBackground, View } from 'react-native'
import { CardText } from "./CardText"
import { style } from "./style"

export const HistoryList = ({ object }) => {

    return (
        <View style={style.Container}>

            <ImageBackground source={require('../../img/background.png')}
                                        imageStyle={{opacity:0.05}} 
                                        style={style.Imagem}
                                        resizeMode="contain">
            <CardText style={{
                color: "#fff",
                fontSize: 26
            }}
                money="Serviço Número: "
                text={object.id_servico} />
            <View style={style.DescContainer}>
                <CardText style={{
                    color: "#fff",
                    fontSize: 24
                }}
                    text={object.produto} />

            </View>
            <View style={style.TextContainer}>
                <CardText style={{
                    color: "#fff",
                    fontSize: 19
                }}
                    money="R$ "
                    text={object.valor_total} />
                <CardText style={{
                    color: "#fff",
                    fontSize: 19
                }}
                text={object.data_saida} />
            </View>
        </ImageBackground>
        </View>
    )
}