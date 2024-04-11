import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import OnboardingA from "./src/screens/OnboardingA";
import Onboarding3 from "./src/screens/Onboarding3";
import Onboarding4 from "./src/screens/Onboarding4";
import Onboarding5 from "./src/screens/Onboarding5";


import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={SplashScreen}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="OnboardingA"
            component={OnboardingA}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboarding3"
            component={Onboarding3}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboarding4"
            component={Onboarding4}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboarding5"
            component={Onboarding5}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
