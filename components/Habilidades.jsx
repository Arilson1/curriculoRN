import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Habilidades() {

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Olá, sou Arilson! um entusiasta da tecnologia apaixonado por criar soluções inovadoras na web, aqui estão algumas de minhas habilidades!</Text>
            <View style={styles.habilidade}>
                <Ionicons name='logo-html5' color={'white'} size={36} />
                <Ionicons name='logo-css3' color={'white'} size={36} />
                <Ionicons name='logo-javascript' color={'white'} size={36} />
                <Ionicons name='logo-nodejs' color={'white'} size={36} />
                <Ionicons name='logo-react' color={'white'} size={36} />
                <Ionicons name='logo-github' color={'white'} size={36} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    }, 
    habilidade: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    texto: {
        color: 'white',
        paddingVertical: 20,
        fontSize: 18,
    }
});