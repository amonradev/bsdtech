import React from "react"
import { style } from "./style"
import { Text, View } from 'react-native'

export const NotificationsTabs = ({object, navigation}) => {
    
    return (
        <>
            <View style={style.Card}>
                <Text style={style.CardText}
                        onPress={() => navigation.navigate(object.Page)}>
                    {object.Titulo}
                </Text>
                <Text style={style.CardTextMinor}
                        onPress={() => navigation.navigate(object.Page)}>
                    {object.Desc}
                </Text>
            </View>
        </>
    )
}