import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Axios from 'axios';

export function Cadastro({navigation}) {
    const [nome, setNome] = useState('');
    const [pass, setPass] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');

    const handleLogin = () =>{
        Axios.post( "http://192.168.1.212:3001/users", { nome })
    }

    return (

        <View style={styles.container}>

            <TouchableOpacity style={styles.buttonVoltar} onPress={()=>{navigation.navigate("Login")}}>
                <Text style={styles.buttonT}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="shopping-cart" size={15} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    onChangeText={setNome}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="lock" size={15} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    onChangeText={setPass}
                    secureTextEntry
                />
                {pass == confirmar ?
                    <Text></Text>
                    :
                    <Text>Senha não esta igual</Text>
                }
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="lock" size={15} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    value={confirmar}
                    onChangeText={setConfirmar}
                    secureTextEntry
                />
            </View>

            <View style={styles.inputContainer}>
                <Entypo name="mail" size={17} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Entypo name="phone" size={17} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Celular"
                    value={telefone}
                    onChangeText={setTelefone}

                />
            </View>
            <View style={styles.inputContainer}>
                <Entypo name="v-card" size={17} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    value={cpf}
                    onChangeText={setCpf}
                    keyboardType='numeric'
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>{handleLogin(),navigation.navigate("Login")}}>
                <Text style={styles.buttonText}>Cadastrar-se</Text>
            </TouchableOpacity>
            <View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 800,
    },
    title: {
        marginTop: 10,
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
        width: '90%',
    },
    input: {
        flex: 1,
        marginLeft: 16,
    },
    button: {
        backgroundColor: '#FF0015',
        paddingVertical: 12,
        paddingHorizontal: 90,
        borderRadius: 6,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonVoltar: {
        marginRight: 290,
        backgroundColor: '#FF0015',
        padding: 10,
        marginTop: -120,
        borderRadius: 6,
        paddingHorizontal: 20,
    },

    buttonT: {
        color: '#fff',
        fontWeight: 'bold',
    }

});

