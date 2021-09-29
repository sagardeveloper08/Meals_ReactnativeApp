import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import start from '../../../../assets/start'
import open from '../../../../assets/open'

const ResturantsInfo = ({ resturant = {} }) => {
    const {
        name = "shree veg",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://media-cdn.tripadvisor.com/media/photo-s/1b/67/cc/f8/chestnut-restaurant.jpg"],
        address = "101,2 pune dhayari",
        isOpenNow = true,
        rating = 3.1,
        isClosedTemporarily = true,
        placeId
    } = resturant
    // Array for svg 
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    // console.log(ratingArray)
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Text style={styles.text}>{name}</Text>
            <View style={styles.rating}>
                {ratingArray.map((_, i) => (
                    <SvgXml
                        key={`star-${placeId}-${i}`}
                        xml={start} style={styles.svg} />
                ))}
                <View>
                    {isClosedTemporarily &&
                        (
                            <Text variant="error">CLOSED_TEMPORARILY</Text>
                        )
                    }
                </View>
                <View style={styles.open}>
                    {isOpenNow && <SvgXml xml={open} width={50} height={20} />}
                </View>
            </View>
            <Text style={styles.address}>{address}</Text>
        </Card>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        marginBottom: 20
    },
    cover: {
        padding: 20,
        backgroundColor: 'white'
    },
    text: {
        padding: 16,

    },
    address: {
        lineHeight: 5,
        padding: 16,
    },
    svg: {
        marginLeft: 20,
        width: 20,
        height: 20,
        letterSpacing: 20
    },
    rating: {
        flexDirection: 'row'
    },
    open:{
        marginLeft:100
    }
})


export default ResturantsInfo