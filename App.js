import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Logado } from './src/components/navs/logado'
import { Login } from './pages/page_login'
import { Cadastro } from './pages/page_cadastro'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
      <Stack.Screen name="Login" component={Login} 
      options={{ headerShown: false }}/>
      <Stack.Screen name="Cadastro" component={Cadastro} 
      options={{ headerShown: false }}/>
      <Stack.Screen name="Logado" component={Logado}
        options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

