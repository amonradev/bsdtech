import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { style } from "./style"

export const ButtonSubmit = ({nome, navigation ,...rest }) => {


    return(
        <>
            <TouchableOpacity
            style={style.Button}
            {...rest}
            >
                <Text style={style.TextButton}>
                    {nome}
                </Text>
            </TouchableOpacity>
        </>
    )
}