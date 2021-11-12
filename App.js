import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Cadastro } from './src/screens/Cadastro';
import { Login } from './src/screens/Login';
import {UsuariosProvider} from './src/context/UsuariosContext';
const Stack = createStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <UsuariosProvider>
        <Stack.Navigator initialRouteName="Cadastro">
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </UsuariosProvider>
    </NavigationContainer>
  );
}