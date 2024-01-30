import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import PasswordStorage from "../pages/PasswordStorage";

const AppStack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen
                name="PasswordStorage"
                component={PasswordStorage}
                options={{
                    headerShown: false
                }}
            />
        </AppStack.Navigator>
    )
}