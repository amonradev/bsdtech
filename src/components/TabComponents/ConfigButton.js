import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { style } from './style'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export const ConfigButton = ({Texto, Name, ...rest}) => {

    return (
        <>
            <TouchableOpacity style={style.ButtonConfig} {...rest}>
                <Text style={style.TextConfig}>
                    {Texto}
                </Text>
                <Icon name={Name} size={24} color={"#fff"} />
            </TouchableOpacity>
        </>
    )
}