
// tela de login //
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Login: ', login);
    console.log('Senha: ', senha);
  };

  return (
    
    <View style={styles.container}>
       <View style={styles.container2}>
      <Image source={require('./assets/ICON.png')} style={styles.logo} />
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity style={styles.button2} onPress={handleLogin}>
        <Text style={styles.buttoncadastre}>Cadastre-se</Text>
      </TouchableOpacity>
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
    logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    marginTop: -40,
    justifyContent: 'center',
    alignItems: 'center',
  },  

  button2:{
    backgroundColor: '#FF0015',
    color: 'white',
    borderRadius: 6,
    marginTop: 10,
    padding: 8,
  },
  buttoncadastre:{
    color: '#fff',
    fontWeight: 'bold',
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

  buttonVoltar:{
    marginLeft: -250,
    backgroundColor: '#FF0015',
    padding: 10,
    marginTop: 20,
    borderRadius: 6,
    paddingHorizontal: 20,
  },

  buttonT:{
    color: '#fff',
    fontWeight: 'bold',
  }

});

*/

// tela de escolha de produto //

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [produtos] = useState([
    { produto: 'Verduras', key: 1 },
    { produto: 'Frutas', key: 2 },
    { produto: 'Frios', key: 3 },
    { produto: 'Carnes', key: 4 },
    { produto: 'Grãos', key: 5 },
    { produto: 'Pães', key: 6 },
  ])

  return (
    <View>

      <View style={styles.container}>
        <Image source={require('./assets/SuperMobi.png')} style={styles.logo} />
      </View>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.key}
        data={produtos}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.quadrado}>{item.produto}</Text>
          </TouchableOpacity>
        )
        }
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
    marginTop: 100,
    
  },

  quadrado: {
    flex: 1,
    marginTop: 20,
    padding: 50,
    paddingVertical: 63,
    backgroundColor: 'red',
    fontSize: 24,
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: 195,
    height: 180,
  },

  logo: {
    width: 350,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 80,
    marginLeft: 18,
  },

}
)
  ;
*/

