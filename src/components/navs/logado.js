import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Categoria } from '../../../pages/page_esco_cate'
import { Frutas } from '../../../pages/page_frutas'

const Drawer = createDrawerNavigator();

export function Logado() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="categoria" component={Categoria}/>
        <Drawer.Screen name="frutas" component={Frutas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

