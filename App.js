import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Cadastro } from './src/screens/Cadastro';
import { Login } from './src/screens/Login';
import { UsuariosProvider } from './src/context/UsuariosContext'
import { Main } from './routes';

const Stack = createStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <UsuariosProvider>
        <Stack.Navigator initialRouteName="Main"  screenOptions={{
        headerShown: false}}>
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </UsuariosProvider>
    </NavigationContainer>
  );
}