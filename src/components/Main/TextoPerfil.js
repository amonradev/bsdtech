import React from "react"
import { Text } from 'react-native'
import { style } from "./style"

export const TextoPerfil = ({nomeUsuario}) => {

    return (
        <>
            <Text style={style.TextoUsuario}>
                Bem Vindo,
            </Text>
            <Text style={style.Nome}>
                {nomeUsuario}!
            </Text>
        </>
    )
}