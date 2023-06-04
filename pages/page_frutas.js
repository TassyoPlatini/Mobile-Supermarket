// tela das frutas //

import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const mercado = {
    fruta: 'Frutas',
    logo: require('../assets/iconpng.png'),
    menu: [
        { id: '1', fruta: 'Limão', preco: '0.30', image: require('../assets/limao.png') },
        { id: '2', fruta: 'Banana', preco: '3.00', image: require('../assets/banana.png') },
        { id: '3', fruta: 'Maça', preco: '1.30', image: require('../assets/maca.png') },
        { id: '4', fruta: 'Abacate', preco: '2.00', image: require('../assets/abacate.png') },
        { id: '5', fruta: 'Melancia', preco: '7.00', image: require('../assets/melancia.png') },
        { id: '6', fruta: 'Pêra', preco: '1.30', image: require('../assets/pera.png') },
        { id: '7', fruta: 'Manga', preco: '1.49', image: require('../assets/manga.png') },
        { id: '8', fruta: 'Morango', preco: '9.99', image: require('../assets/morango.png') },
        { id: '9', fruta: 'Laranja', preco: '0.99', image: require('../assets/laranja.png') },
        { id: '10', fruta: 'Kiwi', preco: '3.54', image: require('../assets/kiwi.png') },
    ],
};

export function Frutas() {
    const [selecionar, setSelecionar] = useState(null);

    const handleSelecionar = (item) => {
        setSelecionar(item);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.itemContainer, selecionar?.id === item.id && styles.selecionarItem]}
            onPress={() => handleSelecionar(item)}
        >
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemfruta}>{item.fruta}</Text>
            <Text style={styles.itempreco}>R${item.preco}</Text>
        </TouchableOpacity>
    );

    return (

        <View style={styles.container}>
            <View style={styles.superior}>
                <Image source={mercado.logo} style={styles.logo} />
                <Text style={styles.mercadofruta}>{mercado.fruta}</Text>
            </View>
            <ScrollView style={styles.menu}>
                {mercado.menu.map((item) => (
                    <View key={item.id}>
                        {renderItem({ item })}
                    </View>
                ))}
            </ScrollView>
            <View style={styles.Inferior}>
                {selecionar ? (
                    <TouchableOpacity style={styles.selecionarButton}>
                        <Text style={styles.selecionarButtonText}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.placeholderButton}>
                        <Text style={styles.placeholderButtonText}>Selecione um item do menu</Text>
                    </View>
                )}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    superior: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginRight: 20,
    },
    mercadofruta: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    menu: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    itemfruta: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itempreco: {
        fontSize: 18,
    },
    selecionarItem: {
        backgroundColor: '#D8666F',
    },
    Inferior: {
        borderTopWidth: 1,
        borderTopColor: 'red',
        paddingVertical: 10,
    },

    itemImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },

});


