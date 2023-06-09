import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export function Categoria({ navigation }) {

    const [produtos] = useState([
        { produto: 'Verduras', key: 1, icon: 'leaf', nav: 'Categoria' },
        { produto: 'Frutas', key: 2, icon: 'apple', nav: 'Frutas' },
        { produto: 'Frios', key: 3, icon: 'cheese', nav: 'Categoria' },
        { produto: 'Carnes', key: 4, icon: 'drumstick-bite', nav: 'Categoria' },
        { produto: 'Grãos', key: 5, icon: 'seedling', nav: 'Categoria' },
        { produto: 'Usuários', key: 6, icon: 'code', nav: 'Users'}
    ])

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <FlatList
                style={styles.flat}
                numColumns={1}
                keyExtractor={(item) => item.key}
                data={produtos}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.clicavel} onPress={() => { navigation.navigate(item.nav) }}>
                        <View style={styles.quadradoDentro}>
                            <FontAwesome5 name={item.icon} size={24} color="white" />
                            <Text style={styles.quadrado}>{item.produto}</Text>
                        </View>
                    </TouchableOpacity>)
                }/>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20,
        marginRight: 20,
        height: 120,
        width: 280,
        marginTop: 1,
    },

    flat:{
        marginBottom: 70,
    },

    clicavel:{
        backgroundColor: 'red',
        padding: 20,
        paddingHorizontal: 90,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    quadrado: {
        marginTop: 15,
        paddingVertical: 1,
        fontSize: 24,
        margin: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff',

    },

    quadradoDentro: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

