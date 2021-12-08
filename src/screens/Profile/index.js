import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { style } from './style'
import { Scroll } from '../../components/Scroll'
import { BackgroundImage } from '../../components/Main/BackgroundImg'
import Icon from 'react-native-vector-icons/Ionicons'
import { BackTop } from '../../components/HomeScreensComponents/BackTop'
import { UsuariosContext } from '../../context/UsuariosContext'
import axios from 'axios'
import { url } from '../../utils/url'
Icon.loadFont();

export const Profile = ({navigation}) => {

    const { dados, setDados } = useContext(UsuariosContext)
    const nome = dados.nome

    return (
        <Scroll>
            <BackgroundImage>
            <View style={style.ButtonBack}>
                <BackTop page="Perfil" navigation={navigation} />
            </View>
                <View style={style.PerfilContainer}>
                    <View style={style.ContainerCamera}>
                        <TouchableOpacity>
                            <Icon name="camera-outline" size={24} color={"#fff"} style={style.Camera} />
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../img/perfil.png')} style={style.ImagemPerfil} resizeMode="contain" />
                    <View style={style.ContainerPerfil}>
                        <Text style={style.TextoPerfil}>{nome}</Text>
                    </View>
                </View>
            </BackgroundImage>
        </Scroll>
    )
}