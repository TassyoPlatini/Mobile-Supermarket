// tela de escolha de categoria //

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export function Categoria({ navigation }) {
    const [produtos] = useState([
        { produto: 'Verduras', key: 1, icon: 'leaf' },
        { produto: 'Frios', key: 3, icon: 'cheese' },
        { produto: 'Carnes', key: 4, icon: 'drumstick-bite' },
        { produto: 'Grãos', key: 5, icon: 'seedling' },
    ])

    return (
        <View>
            <View style={styles.container}>
                <Image source={require('../assets/Logopng.png')} style={styles.logo} />
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("frutas") }}>
                        <View style={styles.item}>
                            <FontAwesome5 name='apple' size={24} color="white" />
                            <Text style={styles.quadrado}>Frutas</Text>
                        </View>
                    </TouchableOpacity>
            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.key}
                data={produtos}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <FontAwesome5 name={item.icon} size={24} color="white" />
                            <Text style={styles.quadrado}>{item.produto}</Text>
                        </View>
                    </TouchableOpacity>

                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 105,

    },

    quadrado: {
        flex: 1,
        marginTop: 15,
        paddingVertical: 1,
        fontSize: 24,
        margin: 20,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff',

    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'red',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },

    itemText: {
        marginLeft: 20,
        fontSize: 24,
        color: '#fff',

    },

    logo: {
        width: 300,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 70,
        marginRight: 20,
        width: 280,
        marginTop: 1,
    },

});

