import React from "react"
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Airing from "../Screen/AnimeListing/Airing"
import Complete from "../Screen/AnimeListing/Complete"
import Upcoming from "../Screen/AnimeListing/Upcoming"
import { NavigationContainer } from "@react-navigation/native"
import Header from '../Component/Header'
import Favourites from "../Screen/Favourites/Favourites"
import Details from "../Screen/Details/Details"
import FeatherIcon from 'react-native-vector-icons/Feather'
import { View, Text, Dimensions, Image } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

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

                <Stack.Screen
                name='Favourites'
                component={Favourites}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name='Details'
                component={Details}
                options={{
                    headerTitle: 'MyAnime',
                  }}
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
                }} name="Home" component={TabStack} 
            />
            <Drawer.Screen 
                options={{
                    headerTitle: '', 
                    header: props => <Header openDrawer={props.navigation}/>
                }} name="Favourites" component={Favourites} 
            />
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
                options={{
                    headerTitle: '',
                    tabBarIcon: props => <Image source={require('../assets/airing.png')} style={{width: 30, height: 30}}/>
                }}
            />
            <Tab.Screen 
                name="Complete" 
                component={Complete} 
                options={{
                    headerTitle: '',
                    tabBarIcon: props => <Image source={require('../assets/complete.png')} style={{width: 30, height: 30}}/>
                }}
            />
            <Tab.Screen 
                name="Upcoming" 
                component={Upcoming} 
                options={{
                    headerTitle: '',
                    tabBarIcon: props => <Image source={require('../assets/upcoming.png')} style={{width: 30, height: 30}}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default MainRoute
