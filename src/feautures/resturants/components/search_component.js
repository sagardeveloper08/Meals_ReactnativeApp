import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../../services/locations/locations.context'

export const Search = () => {

    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        search(searchKeyword);
    }, []);

    return (
        <View style={styles.search}>
            <Searchbar
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        padding: 11,
        // backgroundColor: "green"
    }
})