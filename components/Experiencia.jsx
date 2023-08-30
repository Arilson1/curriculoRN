import { View, Text, StyleSheet } from 'react-native';

export function Experiencia() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Minha Experiencia:</Text>
            <Text style={styles.texto}>Suporte TI - FESO</Text>
            <Text style={styles.texto}>Suporte wm Sistemas (Semento Hospitalar) - FESO - 12/2018 - 09/2022</Text>
            <Text style={styles.texto}>Desenvolvedor FullStack - Asl Softhouse - 09/2022 até o mometo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    }, 
    texto: {
        color: 'white',
        paddingVertical: 8,
        fontSize: 18,
    }
});