import React, { useState } from 'react'
import { View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import ResturantsInfo from '../components/resturants_componet'

const ResturantsDetailsScreen = ({ route }) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false)

    const { resturant } = route.params;
    // console.log(resturant)
    return (
        <>
            <View>
                <ScrollView>
                    <ResturantsInfo resturant={resturant} />
                    <List.Accordion
                        title="BreakFast"
                        left={(props) => <List.Icon{...props} icon="bread-slice" />}
                        expanded={breakfastExpanded}
                        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                    >
                        <List.Item title="Eggs Benedict" />
                        <List.Item title="Classic Breakfast" />
                    </List.Accordion>
                    {/*  */}
                    <List.Accordion
                        title="Lunch"
                        left={(props) => <List.Icon{...props} icon="hamburger" />}
                        expanded={lunchExpanded}
                        onPress={() => setLunchExpanded(!lunchExpanded)}
                    >
                        <List.Item title="Burger Fries" />
                        <List.Item title="Steak Sandwich" />
                        <List.Item title="Mushroom Soup" />
                    </List.Accordion>
                    {/*  */}
                    <List.Accordion
                        title="Drinks"
                        left={(props) => <List.Icon{...props} icon="cup" />}
                        expanded={drinksExpanded}
                        onPress={() => setDrinksExpanded(!drinksExpanded)}
                    >
                        <List.Item title="Cold Coffee" />
                        <List.Item title="Hot Chochlate" />
                        <List.Item title="Capanicoun" />
                    </List.Accordion>
                    <List.Accordion
                        title="Dinner"
                        left={(props) => <List.Icon{...props} icon="food-variant" />}
                        expanded={dinnerExpanded}
                        onPress={() => setDinnerExpanded(!dinnerExpanded)}
                    >
                        <List.Item title="Eggs Benedict" />
                        <List.Item title="Eggs Benedict" />
                        <List.Item title="Eggs Benedict" />
                    </List.Accordion>
                </ScrollView>
            </View>
        </>
    )
}

export default ResturantsDetailsScreen