import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Educacao() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Minha jornada educacional tem sido uma base sólida para minha carreira como desenvolvedor web, atualmente sou graduando em:</Text>
            <View style={styles.educacao}>
                <Ionicons name='school' color={'white'} size={36} />
                <Text style={styles.formacao}>Análise e Desenvolvimento de Sistemas</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    educacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    texto: {
        color: 'white',
        paddingVertical: 20,
        fontSize: 18,
    },
    formacao: {
        color: 'white',
        fontSize: 16
    }
});