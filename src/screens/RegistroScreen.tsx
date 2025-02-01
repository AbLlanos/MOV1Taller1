import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParams } from '../navigator/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'registroScreen'>;


export const RegistroScreen = ({ navigation }: Props) => {
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [usuario, setUsuario] = React.useState('');
    const [correoElectronico, setCorreoElectronico] = React.useState('');
    const [contrasena, setContrasena] = React.useState('');
    const [confirmarContrasena, setConfirmarContrasena] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground
                source={require('../img/0004-fondoRegistro.jpg')}
                style={styles.imagenFondo}
                imageStyle={{ opacity: 0.3 }}
            >


                <Text style={styles.textoSuperior}>Llene todos los campos a continuación</Text>

                <View style={styles.formContainer}>

                    <Text style={styles.label}>Ingrese su nombre</Text>
                    <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre}   placeholderTextColor={"gray"} />
                    <Text style={styles.label}>Ingrese su apellido</Text>
                    <TextInput style={styles.input} placeholder="Apellido" value={apellido} onChangeText={setApellido}   placeholderTextColor={"gray"} />
                    <Text style={styles.label}>Ingrese su usuario</Text>
                    <TextInput style={styles.input} placeholder="Usuario" value={usuario} onChangeText={setUsuario}   placeholderTextColor={"gray"} />
                    <Text style={styles.label}>Ingrese su correo electrónico</Text>
                    <TextInput style={styles.input} placeholder="Correo electrónico" value={correoElectronico} onChangeText={setCorreoElectronico} keyboardType="email-address"    placeholderTextColor={"gray"}/>
                    <Text style={styles.label}>Ingrese su contraseña</Text>
                    <TextInput style={styles.input} placeholder="Contraseña" value={contrasena} onChangeText={setContrasena} secureTextEntry   placeholderTextColor={"gray"} />
                    <Text style={styles.label}>Reingrese la contraseña</Text>
                    <TextInput style={styles.input} placeholder="Confirmar contraseña" value={confirmarContrasena} onChangeText={setConfirmarContrasena} secureTextEntry    placeholderTextColor={"gray"}/>
                </View>

                <TouchableOpacity style={styles.btnRegistrar}>
                    <Text style={styles.textoBtnRegistrar}>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("loginScreen")}>

                    <Text style={styles.textoLogin}>¿Ya tienes una cuenta? <Text style={styles.enlaceLogin}>Iniciar Sesión</Text></Text>
                </TouchableOpacity>

            </ImageBackground>

        </SafeAreaView>




    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:"black",
    },
    textoSuperior: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        color: "white",
        paddingVertical: 10,
    },
    imagenFondo: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
        padding: 15,
    },
    label: {
        color: 'white',
        fontSize: 15,
        marginBottom: 4,
        fontWeight: "700",
    },
    opcionMedia: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },

    textoInferior: {
        fontSize: 17,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: "center",
    },

    formContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        padding: 9,
        marginVertical: 3,
        borderWidth: 1,
        borderColor: "#922b21",
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 12,
    },
    btnRegistrar: {
        backgroundColor: "#154360",
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: "center",
        marginTop: 15,
    },
    textoBtnRegistrar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white",
    },
    textoLogin: {
        marginTop: 15,
        fontSize: 18,
        color: "white",
    },
    enlaceLogin: {
        color: "#5dade2",
        fontWeight: "bold",
    },
});
