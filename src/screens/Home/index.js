import React, { useContext } from "react"
import { View, Image, ScrollView, Button } from 'react-native'
import { style } from "./style"
import { BackgroundImage } from "../../components/Main/BackgroundImg"
import { Scroll } from '../../components/Scroll'
import { TextoPerfil } from "../../components/Main/TextoPerfil"
import { ContainerButtons } from "../../components/Main/ContainerButtons"
import axios from "axios"
import { UsuariosContext } from "../../context/UsuariosContext"

export const Home = ({navigation}) => {
    const { dados } = useContext(UsuariosContext)

    const nomeUsuario = dados.nome

    return (
        <Scroll>
            <BackgroundImage>
                        <View>
                            <Image source={require('../../img/perfil.png')} style={style.ImagemPerfil} resizeMode="contain" />
                            <TextoPerfil nomeUsuario={nomeUsuario} />
                        </View>
                        <View style={style.MainContainer}>
                            <ContainerButtons navigation={navigation} />
                        </View>
            </BackgroundImage>
        </Scroll>
    )
}