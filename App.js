import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./src/components/Home";
import {Details} from "./src/components/Details";


export default function App() {
    const Stack = createNativeStackNavigator()
  return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="details" component={Details}/>
    </Stack.Navigator>
</NavigationContainer>
  );
}

