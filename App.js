
// tela de login //
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
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
      <View style={styles.container2}>
        <Image source={require('./assets/iconpng.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="shopping-cart" size={15} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={login}
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
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <Button title="Entrar" color="#FF0015" onPress={handleLogin} />

      <View style={styles.buttonContainer}>
        <Button title="Cadastre-se" color="#FF0015" onPress={handleCadastro} />
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
*/

// tela de cadastro //
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  const handleLogin = () => {
    console.log('Login: ', login);
    console.log('Senha: ', senha);
    console.log('Confirmar Senha: ', confirmar);
    console.log('Email: ', email);
    console.log('Telefone: ', telefone);
    console.log('CPF: ', cpf);
  };

  return (

    <View style={styles.container}>

      <TouchableOpacity style={styles.buttonVoltar} onPress={handleLogin}>
        <Text style={styles.buttonT}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.inputContainer}>
        <FontAwesome5 name="shopping-cart" size={15} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={login}
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
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
         {senha==confirmar ?
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
    marginLeft: -250,
    backgroundColor: '#FF0015',
    padding: 10,
    marginTop: 20,
    borderRadius: 6,
    paddingHorizontal: 20,
  },

  buttonT: {
    color: '#fff',
    fontWeight: 'bold',
  }

});

*/


// tela de escolha de categoria //

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [produtos] = useState([
    { produto: 'Frutas', key: 2, icon: 'apple' },
    { produto: 'Verduras', key: 1, icon: 'leaf' },
    { produto: 'Frios', key: 3, icon: 'cheese' },
    { produto: 'Carnes', key: 4, icon: 'drumstick-bite' },
    { produto: 'Grãos', key: 5, icon: 'seedling' },
  ])

  return (
    <View>

      <View style={styles.container}>
        <Image source={require('./assets/Logopng.png')} style={styles.logo} />
      </View>
      
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
*/

// tela das frutas //
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const mercado = {
  fruta: 'Frutas',
  logo: require('./assets/iconpng.png'),
  menu: [
    { id: '1', fruta: 'Limão', preco: '0.30',  image: require('./assets/limao.png')},
    { id: '2', fruta: 'Banana', preco: '3.00', image: require('./assets/banana.png') },
    { id: '3', fruta: 'Maça', preco: '1.30', image: require('./assets/maca.png') },
    { id: '4', fruta: 'Abacate', preco: '2.00', image: require('./assets/abacate.png') },
    { id: '5', fruta: 'Melancia', preco: '7.00', image: require('./assets/melancia.png') },
    { id: '6', fruta: 'Pêra', preco: '1.30', image: require('./assets/pera.png') },
    { id: '7', fruta: 'Manga', preco: '1.49', image: require('./assets/manga.png') },
    { id: '8', fruta: 'Morango', preco: '9.99', image: require('./assets/morango.png') },
    { id: '9', fruta: 'Laranja', preco: '0.99', image: require('./assets/laranja.png') },
    { id: '10', fruta: 'Kiwi', preco: '3.54', image: require('./assets/kiwi.png') },
  ],
};

export default function App() {
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
*/

