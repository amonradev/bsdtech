import React, { useContext, useEffect } from "react"
import { View, Text, TextInput, Image, StatusBar, TouchableOpacity, Button, ScrollView } from 'react-native'
import { style } from "./style"
import { useForm, Controller } from "react-hook-form";
import { UxButton } from "../../components/Crud/UxButton";
import { Scroll } from "../../components/Scroll";
import { ButtonSubmit } from "../../components/Crud/ButtonSubmit";
import { SafeAreaView } from "react-native";
import { UsuariosContext } from "../../context/UsuariosContext";
import axios from "axios";


export const Login = ({ navigation }) => {

    const { control, handleSubmit,  formState: { errors } } = useForm()
    const { setFlag } = useContext(UsuariosContext)

    const onSubmit = (data) => {
        axios({
            url: "https://senaiuserapi.herokuapp.com/sessions",
            method: "post",
            data: data
        }).then((res) => {   
            if(res.data.flag) {
                setFlag(res.data)
                navigation.navigate('Main')
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    

    return (
        <SafeAreaView>
            <ScrollView>
                <StatusBar backgroundColor="#1a202c" />
                <View style={style.Box}>
                    <Image source={require('../../img/logoBsd.png')} style={style.Imagem} />
                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Digite seu email"
                                style={style.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    {errors.email && <Text style={style.TextError}>* Este campo é obrigatório</Text>}

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                secureTextEntry={true}
                                placeholder="Digite sua senha"
                                style={style.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="senha"
                        defaultValue=""
                    />
                    {errors.senha && <Text style={style.TextError}>* Este campo é obrigatório</Text>}
                    <UxButton nome="Esqueceu sua senha?" func={() => navigation.navigate('Register')} estilo="marginTop: 0, textAlign: 'left' " />
                    <ButtonSubmit nome="Fazer Login" onPress={handleSubmit(onSubmit)} />
                    <UxButton nome="Ainda não é cadastrado? Cadastre-se agora" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}