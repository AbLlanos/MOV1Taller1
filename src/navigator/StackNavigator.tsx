import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistroScreen } from '../screens/RegistroScreen';
import { StyleSheet } from 'react-native';

export type RootStackParams = {
    loginScreen: undefined,
    registroScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='loginScreen'
            screenOptions={{
                headerStyle: {
                    elevation: 10
                },
                headerShown: true,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}>
            <Stack.Screen name="loginScreen"
                options={{
                    title: 'Iniciar sesión',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center", 
                }}
                component={LoginScreen} />
            <Stack.Screen name="registroScreen"
                options={{
                    title: 'Registro',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center",
                }}
                component={RegistroScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    titulosVentanas: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: '700',
    }
})