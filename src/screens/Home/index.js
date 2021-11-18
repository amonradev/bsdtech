import React from "react"
import { View, Text, ImageBackground, ScrollView, Image } from 'react-native'
import { style } from "./style"

export const Home = () => {
    const nomeUsuario = "Fernando"
    return (
        <ScrollView style={style.MasterBox}>
            {/* Acho que isso tambem pode ser um componente */}
            <ImageBackground source={require('../../img/background.png')} 
                            imageStyle={{opacity:0.15}} 
                            style={style.Imagem}>
                        <View style={style.PerfilBox}>
                            <Image source={require('../../img/perfil.png')} style={style.ImagemPerfil} resizeMode="contain" />
                            {/* Criar um componente pra isso aqui em baixo */}
                            <Text style={style.TextoUsuario}>
                                Bem Vindo, 
                            </Text>
                            <Text style={style.Nome}>
                                {nomeUsuario}!
                            </Text>
                        </View>
            </ImageBackground>
        </ScrollView>
    )
}