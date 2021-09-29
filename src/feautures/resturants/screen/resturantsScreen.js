import React, { useContext } from 'react'
import { Colors, Searchbar } from 'react-native-paper';
import { StyleSheet, SafeAreaView, StatusBar, Text, View, FlatList } from 'react-native';
import ResturantsInfo from '../components/resturants_componet'
import { RestaurantsContext } from '../../../services/resturants/resturantsContext';
import { ActivityIndicator,Color } from 'react-native-paper';
import { Search } from '../components/search_component';

const ResturantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext)

    return (
        <SafeAreaView style={styles.container}>
            {
                isLoading &&(
                    <View style={{position:"absolute",top:"50%", left:"50%"}}>
                        <ActivityIndicator
                        size={50}
                        style={{marginLeft:-25}}
                        animating={true}
                        color={Colors.blue400}
                        />
                    </View>
                )
            }
            <View>
            <Search/>
            </View>
            
            <FlatList
                data={restaurants}
                renderItem={({ item }) => {
                    console.log(item)
                    return (
                        <ResturantsInfo resturant ={item} />
                    )
                }}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 11 }}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        padding: 11,
        backgroundColor: "white"
    }
});

export default ResturantsScreen