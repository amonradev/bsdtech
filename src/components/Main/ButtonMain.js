import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { style } from "./style"

export const ButtonMain = ({func, nomeBotao}) => {


    return(
        <>
            <TouchableOpacity
            style={style.Button}
            onPress={func}
            >
                <Text style={style.TextButton}>
                    {nomeBotao}
                </Text>
            </TouchableOpacity>
        </>
    )
}