import React from "react"
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Airing from "../Screen/AnimeListing/Airing"
import Complete from "../Screen/AnimeListing/Complete"
import Upcoming from "../Screen/AnimeListing/Upcoming"
import { NavigationContainer } from "@react-navigation/native"
import Header from '../Component/Header'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTruncatedBackTitle: '',
                headerTitleAlign: 'center',
            }}
            >
                <Stack.Screen
                name='DrawerStack'
                component={DrawerStack}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const DrawerStack = () => {
    return (
        <Drawer.Navigator
        initialRouteName="Anime Listing"
        screenOptions={{
            activeTintColor: '#FF934B'
        }}
        >
            <Drawer.Screen 
                options={{
                    headerTitle: '', 
                    header: props => <Header openDrawer={props.navigation}/>
                }} name="Anime Listing" component={TabStack} />
        </Drawer.Navigator>
    )
    
}

const TabStack = () => {
    return (
        <Tab.Navigator
        screenOptions={{headerShown: false}}
        >
            <Tab.Screen 
                name="Airing" 
                component={Airing} 
                options={{headerTitle: ''}}
            />
            <Tab.Screen 
                name="Complete" 
                component={Complete} 
                options={{headerTitle: ''}}
            />
            <Tab.Screen 
                name="Upcoming" 
                component={Upcoming} 
                options={{headerTitle: ''}}
            />
        </Tab.Navigator>
    )
}

export default MainRoute
