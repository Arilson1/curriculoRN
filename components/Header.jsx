import { Image, StyleSheet, View } from "react-native";

export function Header() {
    return (
       <View style={styles.container}>
        <Image source={require('../assets/logo.png')}/>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});