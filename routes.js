import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "./src/screens/Home"
const Tabs = createBottomTabNavigator()

export const Main = () => {

    return (
        <Tabs.Navigator initialRouteName="Home">
            <Tabs.Screen name="Home" component={Home} />
        </Tabs.Navigator>
    )
}