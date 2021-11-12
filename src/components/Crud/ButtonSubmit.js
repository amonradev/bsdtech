import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { style } from "./style"

export const ButtonSubmit = ({func, nome}) => {


    return(
        <>
            <TouchableOpacity
            style={style.Button}
            onPress={func}
            >
                <Text style={style.TextButton}>
                    {nome}
                </Text>
            </TouchableOpacity>
        </>
    )
}