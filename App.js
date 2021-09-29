import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResturantsScreen from './src/feautures/resturants/screen/resturantsScreen';
import { Ionicons } from '@expo/vector-icons'
import { RestaurantsContextProvider } from './src/services/resturants/resturantsContext';
import { LocationContextProvider } from './src/services/locations/locations.context';

const Tab = createBottomTabNavigator();

// temporay setting

const Settings = () => <Text>Setting</Text>

const Map = () => <Text>Map</Text>

export default function App() {
  return (
    <>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === "resturants") {
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
              <Tab.Screen name="resturants" component={ResturantsScreen} />
              <Tab.Screen name="setting" component={Settings} />
              <Tab.Screen name="map" component={Map} />
            </Tab.Navigator>
          </NavigationContainer>
          {/* <ResturantsScreen/> */}
        </RestaurantsContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}