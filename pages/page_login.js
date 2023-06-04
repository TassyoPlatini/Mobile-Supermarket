// tela de login //

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export function Login({navigation}) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = () => {
        Alert.alert('Cadastro', 'Loading...');
    };
    const handleLogin = () => {
        Alert.alert('Login', 'Senha Incorreta.');
    };
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/iconpng.png')} style={styles.logo} />
            </View>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="shopping-cart" size={15} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    onChangeText={setLogin}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="lock" size={15} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={setSenha}
                    secureTextEntry
                />
            </View>

            <Button title="Entrar" color="#FF0015" onPress={()=>{navigation.navigate("Logado")}}/>

            <View style={styles.buttonContainer}>
                <Button title="Cadastre-se" color="#FF0015" onPress={()=>{navigation.navigate("Cadastro")}}/>
                                                            
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginVertical: 10,
        width: '100%',
    },
    input: {
        flex: 1,
        marginLeft: 16,
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        marginTop: -40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    buttonContainer: {
        marginTop: 10,
    },
});


