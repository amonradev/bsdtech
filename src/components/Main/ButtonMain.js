import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { style } from "./style"
import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont();
export const ButtonMain = ({func, nomeBotao, nameIcon, ...rest}) => {


    return(
        <>
            <TouchableOpacity
            style={style.Button}
            {...rest}
            >
                <Text style={style.TextButton}>
                    <Icon name={nameIcon} size={24} color={'#fff'} />
                        {nomeBotao}
                </Text>
            </TouchableOpacity>
        </>
    )
}