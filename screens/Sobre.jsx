import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export function Sobre() {

    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            
            <Text style={{ color: colors.text }}>Essa e a segunda pagína.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});