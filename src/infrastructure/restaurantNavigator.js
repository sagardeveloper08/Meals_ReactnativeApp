import React from 'react'
import { Text } from 'react-native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import ResturantsScreen from '../feautures/resturants/screen/resturantsScreen';
import ResturantsDetailsScreen from '../feautures/resturants/screen/resturantsDetailsScreen';


const RestaurantStack = createStackNavigator();

const RestaurantNavigator = () => {
    return (
        <>
            <RestaurantStack.Navigator headerMode ="none" screenOptions={{
                ...TransitionPresets.ModalPresentationAndriod
            }}>
            <RestaurantStack.Screen
                name="Resturants"
                component={ResturantsScreen}
                />
                <RestaurantStack.Screen
                name="ResturantsDetails"
                component={ResturantsDetailsScreen}
                />
            </RestaurantStack.Navigator>
        </>
    )
}


export default RestaurantNavigator