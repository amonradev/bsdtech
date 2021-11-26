import React from "react"
import { style } from "./style"
import { Text } from 'react-native'

export const CardText = ({text, money, style}) => {
    return <Text style={style}>{money}{text}</Text>
}