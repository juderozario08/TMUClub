import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { theme } from './Colors';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                statusBarAnimation: 'slide',
                animation: 'fade_from_bottom',
                autoHideHomeIndicator: true
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
            <StatusBar style="auto" hideTransitionAnimation='slide' />
        </NavigationContainer >
    )
}
