import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';

type Props = StackScreenProps<RootStackParams, "loginScreen">;

export const LoginScreen = ({ navigation }: Props) => {

    const [correo, setCorreo] = React.useState('');
    const [contrasena, setContrasena] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../img/0002-fondoTiendaV2.jpg')}
                style={styles.imagenFondo}
                imageStyle={{ opacity: 0.6 }}
            >
                <View style={styles.logoContainer}>
                    <Image source={require('../img/0001-logoTienda.png')} style={styles.imagenLogo} />
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Ingrese su correo electrónico</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCorreo}
                        value={correo}
                        placeholderTextColor={"gray"}
                        placeholder="Correo electrónico"
                    />

                    <Text style={styles.label}>Ingrese su contraseña</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setContrasena}
                        value={contrasena}
                        placeholder="Contraseña"
                        placeholderTextColor={"gray"}
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.btnIniciarSesion} onPress={() => console.log("Iniciar sesión")}>
                        <Text style={styles.btnTexto}>Iniciar sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnRegistro} onPress={() => navigation.navigate("registroScreen")}>
                        <Text style={styles.btnTexto}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    imagenFondo: {
        width:"100%",
        height:"100%",
        resizeMode: 'cover',
        justifyContent: 'center',
        padding: 15,
    },
    logoContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    imagenLogo: {
        width: 300,
        height: 200,
        maxWidth: "100%",
        maxHeight: "200%",
        resizeMode: "contain",
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    label: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
    },
    btnIniciarSesion: {
        backgroundColor: '#7b241c',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    btnRegistro: {
        backgroundColor: '#154360',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    btnTexto: {
        color: '#f9ebea',
        fontSize: 20,
        fontWeight:'500',
    },
});
