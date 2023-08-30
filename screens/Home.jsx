import { StyleSheet, View, Text, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Header } from '../components/Header';
import { Habilidades } from '../components/Habilidades';
import { Educacao } from '../components/Educacao';
import { Experiencia } from '../components/Experiencia';

export function Home() {

    return (
        <View style={styles.container}>
            <Header />
            <Habilidades />
            <Educacao />
            <Experiencia />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});