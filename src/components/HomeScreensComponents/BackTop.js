import React from "react"
import { View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();
import { style } from "./style";

export const BackTop = ({page, navigation}) => {

    return (
        <>
            <View style={style.TopContainer}>
                <TouchableOpacity style={style.ButtonContainer} onPress={() => navigation.navigate("MainPages")}>
                    <Icon name="chevron-back-outline" size={24} color={'#fff'} />
                    <Text style={style.TextTop}>
                        {page}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}