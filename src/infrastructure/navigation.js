import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResturantsScreen from '../../src/feautures/resturants/screen/resturantsScreen';
import { Ionicons } from '@expo/vector-icons'
import RestaurantNavigator from './restaurantNavigator';
import { MapScreen } from '../feautures/maps/screens/maps.screen';


const Tab = createBottomTabNavigator();

// temporay setting

const Settings = () => <Text>Setting</Text>

const Map = () => (<Text>Map</Text>);

export default function Navigator() {
    return (
        <>

            <NavigationContainer >
                <Tab.Navigator 
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;

                            if (route.name === "Resturants") {
                                iconName = "md-restaurant"
                            }
                            else if (route.name === "setting") {
                                iconName = "md-settings"
                            }
                            else if (route.name === "map") {
                                iconName = "md-map"
                            }
                            return <Ionicons name={iconName} size={size} color={color} />
                        }
                    })}
                    tabBarOptions={{
                        activeTintColor: "tomato",
                        inactiveTintcolor: "blue"
                    }}
                >
                    <Tab.Screen name="Resturants"  component={RestaurantNavigator} />
                    <Tab.Screen name="setting" component={Settings} />
                    <Tab.Screen name="map" component={MapScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}