import React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { Home } from "./src/screens/Home"

const Tabs = createMaterialBottomTabNavigator()

export const Main = () => {

    return (
        <Tabs.Navigator initialRouteName="Home" 
                        activeColor="#f0edf6"
                        inactiveColor="#dfdfdf"
                        barStyle={{ 
                            backgroundColor: '#273d96' 
                        }}
                        screenOptions={{
                            headerShown: false,
                            keyboardHidesTabBar: true,
                        }}
                    >
            <Tabs.Screen name="Home" component={Home} />
        </Tabs.Navigator>
    )
}