import React from "react"
import { View, Text, ScrollView, TextInput, Image } from 'react-native'
import { style } from "./style"
import { ButtonSubmit } from "../../components/Crud/ButtonSubmit";
import { useForm, Controller } from "react-hook-form";
import { UxButton } from "../../components/Crud/UxButton";

export const Login = ({navigation}) =>{

    const { control, handleSubmit, formState: { errors } } = useForm()

    return (
        <ScrollView style={style.MasterBox}>
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
                <UxButton nome="Esqueceu sua senha?" estilo="marginTop: 0, textAlign: 'left' " />
                <ButtonSubmit nome="Fazer login" />
                <UxButton nome="Ainda não é cadastrado? Cadastre-se agora" />
            </View>
        </ScrollView>

    )
}