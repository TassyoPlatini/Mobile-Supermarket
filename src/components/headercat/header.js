import { StyleSheet, Text, View, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';



export function Header() {

    const route = useRoute();

    return (
        <View style={styles.superior}>
            <Image source={require("../../../assets/iconpng.png")} style={styles.logo} />
            <Text style={styles.mercadofruta}>{route.name}</Text>
        </View>
    );}
        const styles = StyleSheet.create({
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
        })