import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { style } from "./style"

export const UxButton = ({func, nome}) => {


    return(
        <>
            <TouchableOpacity
            onPress={func}
            style={style.ButtonUx}
            title={nome}
            />
        </>
    )
}