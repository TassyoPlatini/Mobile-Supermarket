import { useEffect, useState } from 'react';
import { Header } from '../src/components/headercat/header'
import { StyleSheet, Text, FlatList, View, TouchableOpacity} from 'react-native';
import Axios from 'axios';



export function Users() {

    const [lista, setLista] = useState('');

    useEffect(()=> {
        Axios.get("http://192.168.1.212:3001/users").then(
            (response) => {
                setLista(response.data)
            }
        )
    }, [lista])

    const deletar = (id) => {
        Axios.delete(`http://192.168.1.212:3001/users/${id}`,
        )
    }

    
    return (
        <View style={styles.container}>
        <Header/>
        <FlatList
                style={styles.flat}
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={lista}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.clicavel} onPress={() => {deletar(item.id)}}>
                        <View style={styles.quadradoDentro}>
                            <Text style={styles.quadrado}>{item.nome}</Text>
                        </View>
                </TouchableOpacity>)
            }/>
        </View>
    )}
        const styles = StyleSheet.create({

            container:{
            flex: 1,
            backgroundColor: '#fff',
            padding: 20,
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
        })