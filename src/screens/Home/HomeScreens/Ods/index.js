import axios from "axios"
import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { OdsList } from "../../../../components/HomeScreensComponents/OdsList"
import { style } from './style'
import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont();

export const Ods = ({navigation}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        function fetchData() {
            axios({
                url: "https://node-amarrado.herokuapp.com/services",
                method: "GET"
            }).then((res) => {
                setData(res.data)
            }).catch((error) => {
                console.log(error)
            })
        }
        fetchData()

    }, [''])
    if (data.length >= 1) {
        var flag = 1
    }
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: "#1a202c", }}>
                <View>
                    <View style={style.TopContainer}>
                        <TouchableOpacity style={style.ButtonContainer} onPress={() => navigation.navigate("MainPages")}>
                            <Icon name="chevron-back-outline" size={24} color={'#fff'} />
                        <Text style={style.TextTop}>
                            Ordem de Serviço
                        </Text>
                        </TouchableOpacity>
                    </View>
                    {/*Adicionar lottier de loading enquanto espera a requisição*/}
                    {flag != 1 ? <View><Text>Carregando</Text></View> :
                        <>
                            {data.length >= 1 ? <OdsList object={data[0]} /> : <></>}
                            {data.length >= 2 ? <OdsList object={data[1]} /> : <></>}
                            {data.length >= 3 ? <OdsList object={data[2]} /> : <></>}
                            {data.length >= 4 ? <OdsList object={data[3]} /> : <></>}
                            {data.length >= 5 ? <OdsList object={data[4]} /> : <></>}
                            {data.length >= 6 ? <OdsList object={data[5]} /> : <></>}
                            {data.length >= 7 ? <OdsList object={data[6]} /> : <></>}
                            {data.length >= 8 ? <OdsList object={data[7]} /> : <></>}
                            {data.length >= 9 ? <OdsList object={data[8]} /> : <></>}
                            {data.length >= 10 ? <OdsList object={data[9]} /> : <></>}
                        </>}

                    <Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}