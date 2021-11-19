import React from 'react'
import { ImageBackground, } from 'react-native'
import { style } from './style'

export const BackgroundImage = ({children}) => {

    return (
        <>
        <ImageBackground source={require('../../img/background.png')} 
                            imageStyle={{opacity:0.15}} 
                            style={style.Imagem}>
            {children}
        </ImageBackground>
        </>
    )
}