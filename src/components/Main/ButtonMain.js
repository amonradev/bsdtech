import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { style } from "./style"
import Icon from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/EvilIcons'

Material.loadFont()
Icon.loadFont();
export const ButtonMain = ({func, nomeBotao, nameIcon}) => {


    return(
        <>
            <TouchableOpacity
            style={style.Button}
            onPress={func}
            >
                <Text style={style.TextButton}>
                    {if flag=1 }
                    <Icon name={nameIcon} size={24} color={'#fff'} />
                    {nomeBotao}
                </Text>
            </TouchableOpacity>
        </>
    )
}