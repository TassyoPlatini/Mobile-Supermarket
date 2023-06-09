import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Categoria } from '../../../pages/page_esco_cate'
import { Frutas } from '../../../pages/page_frutas'
import { Users } from '../../../pages/page_user'

const Drawer = createDrawerNavigator();

export function Logado() {
  return (
    <NavigationContainer independent={true} options={{ headerShown: false }}>
      <Drawer.Navigator initialRouteName='Categoria'>
        <Drawer.Screen name="Categoria" component={Categoria}/>
        <Drawer.Screen name="Frutas" component={Frutas} />
        <Drawer.Screen name="Users" component={Users} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

