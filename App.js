import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Register } from './src/screens/Register';
import { Login } from './src/screens/Login';
import { UsuariosProvider } from './src/context/UsuariosContext'
import { Main } from './routes';

const Stack = createStackNavigator()


export default function App() {
  const navigatorOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: 'transparent' },
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    }),
  }
  return (
    <NavigationContainer>
      <UsuariosProvider>
        <Stack.Navigator initialRouteName="Login" screenOptions={navigatorOptions}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </UsuariosProvider>
    </NavigationContainer>
  );
}