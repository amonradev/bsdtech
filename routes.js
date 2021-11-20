import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "./src/screens/Home"
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { Image, StyleSheet, View } from "react-native"
import { Settings } from "./src/screens/Settings"
import { Profile } from "./src/screens/Profile"
import { Contact } from "./src/screens/Contact/Index"
import { Notifications } from "./src/screens/Notifications"
const Tabs = createBottomTabNavigator()

Icon.loadFont();

export const Main = () => {

    return (
        <Tabs.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Profile':
                            iconName = 'person-outline';
                            break;
                        case 'Notifications':
                            iconName = 'notifications-outline';
                            break;
                        case 'Contact':
                            iconName = 'call-outline';
                            break;
                        case 'Settings':
                            iconName = 'settings-outline';
                            break;
                        default:
                            iconName = 'bug-outline';
                            break;
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#4661ce',
                inactiveTintColor: '#777',
                showLabel: false,
            }}
        >
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="Contact" component={Contact} />
            <Tabs.Screen
                name="Home"
                component={Home}
                options={() => ({
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#273d96', '#4661ce']}>
                                <Image style={styles.image} source={require('./src/img/tab.png')} resizeMode="contain" />
                            </LinearGradient>
                        </View>
                    ),
                })} />
            <Tabs.Screen name="Notifications" component={Notifications} />
            <Tabs.Screen name="Settings" component={Settings} />
        </Tabs.Navigator>
    )
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#273d96',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    image: {
        width: 60
    }
});