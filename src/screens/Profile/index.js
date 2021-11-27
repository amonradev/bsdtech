import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { style } from './style'
import { Scroll } from '../../components/Scroll'
import { BackgroundImage } from '../../components/Main/BackgroundImg'
import Icon from 'react-native-vector-icons/Ionicons'
import { BackTop } from '../../components/HomeScreensComponents/BackTop'
Icon.loadFont();

export const Profile = ({navigation}) => {
    const nome = "Fernando"
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
                        <TouchableOpacity>
                            <Icon name="create-outline" size={28} color={"#fff"} style={{ top: 10, padding: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </BackgroundImage>
        </Scroll>
    )
}