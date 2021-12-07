import React from "react"
import { View, Text, ScrollView, TextInput, StatusBar, SafeAreaView } from 'react-native'
import { style } from "./style"
import { ButtonSubmit } from '../../components/Crud/ButtonSubmit'
import { useForm, Controller } from "react-hook-form";
import { UxButton } from "../../components/Crud/UxButton";
import axios from "axios"
import { url } from '../../utils/url'

export const Register = ({ navigation }) => {

  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    
    if (data.senha == data.senhaConfirm) {
      const nome = data.nome
      const email = data.email
      const senha = data.senha
      const userData = {
        nome: nome,
        email: email,
        senha: senha
      }

      axios({
        url: `${url}/usuarios`,
        method: "POST",
        data: userData
      }).then((res) => {
        navigation.navigate("Login")
      }).catch((error) => {
        console.log(error)
      })
    }

  }
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar backgroundColor="#1a202c" />
        <View style={style.Box}>
          <Text style={style.Titulo}>Cadastre-se</Text>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Digite seu nome"
                style={style.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="nome"
            defaultValue=""
          />
          {errors.nome && <Text style={style.TextError}>* Este campo é obrigatório</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Digite seu email" style={style.input}
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

          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                secureTextEntry={true}
                placeholder="Confirme sua senha"
                style={style.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="senhaConfirm"
            defaultValue=""
          />
          {errors.senhaConfirm && <Text style={style.TextError}>* Este campo é obrigatório</Text>}

          <ButtonSubmit nome="Criar minha conta" onPress={handleSubmit(onSubmit)} />
          <UxButton nome="Já tem uma conta? Faça login" func={() => navigation.navigate('Login')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}