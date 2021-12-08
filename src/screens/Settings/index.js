import React, { useContext } from "react"
import { View, Text } from 'react-native'
import { BackgroundImage } from "../../components/Main/BackgroundImg"
import { Scroll } from "../../components/Scroll"
import { ConfigButton } from "../../components/TabComponents/ConfigButton"
import { style } from "./style"
import { UsuariosContext } from "../../context/UsuariosContext"
import axios from "axios"
import { url } from "../../utils/url"

export const Settings = ({navigation}) => {

    const {dados, setDados} = useContext(UsuariosContext)
    
    const deleteAcc = () => {
        const {id} = dados
        axios({
            url: `${url}/usuarios/delete`,
            method: "delete",
            data: {id}
        }).then((res) => {
            setDados("")
            setFlag(0)
            navigation.navigate("Login")
        }).catch((error) => {
            console.log(error)
        })
    }

    const logOff = () => {
        setDados("")
        setFlag(0)
        navigation.navigate("Login")
    }
    return (
        <Scroll>
            <BackgroundImage>
                <View style={style.Container}>
                    <ConfigButton onPress={() => deleteAcc()} Texto="Excluir minha Conta" />
                    <ConfigButton onPress={() => logOff()} Texto="Sair da Conta" />
                </View>
            </BackgroundImage>
        </Scroll>
    )
}