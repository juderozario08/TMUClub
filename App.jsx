import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login.jsx";
import SignUp from "./screens/SignUp.jsx";
import { StatusBar } from "expo-status-bar";
import MemberScreen from "./screens/MemberScreens/MemberScreen.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: "fade_from_bottom",
                    autoHideHomeIndicator: true,
                }}
            >
                {/*<Stack.Screen name="Login" component={Login} />*/}
                {/*<Stack.Screen name="SignUp" component={SignUp} />*/}
                <Stack.Screen name="Member Screen" component={MemberScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" hideTransitionAnimation="slide" />
        </NavigationContainer>
    );
}
