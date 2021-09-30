import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
// import { Searchbar } from 'react-native-paper';
// import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ResturantsScreen from './src/feautures/resturants/screen/resturantsScreen';
// import { Ionicons } from '@expo/vector-icons'
import { RestaurantsContextProvider } from './src/services/resturants/resturantsContext';
import { LocationContextProvider } from './src/services/locations/locations.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { Navigation } from './src/infrastructure/index';

const Tab = createBottomTabNavigator();

// temporay setting

const Settings = () => <Text>Setting</Text>

const Map = () => <Text>Map</Text>

export default function App() {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
            {/* <ResturantsScreen/> */}
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}