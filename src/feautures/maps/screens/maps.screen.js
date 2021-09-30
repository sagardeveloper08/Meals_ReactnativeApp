import React, { useState, useContext, useEffect } from 'react'
import { View } from 'react-native';
import MapView from 'react-native-maps'
import styled from 'styled-components'
import { LocationContext } from '../../../services/locations/locations.context';
import { RestaurantsContext } from '../../../services/resturants/resturantsContext';
import { Search } from '../components/search';
import {MapCallout} from '../components/map-callouts';
import { restaurantsRequest } from '../../../services/resturants/resturantsServices';

const Map = styled(MapView)`
height:100%;
width:100%
`;

export const MapScreen = ({navigation}) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext)

    const [latDelta, setLatDelta] = useState(0);
    const { lat, lng, viewport } = location;

    console.log(viewport, 'viewport1')
    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta(northeastLat - southwestLat)
    }, [location, viewport])

    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((resturant) => {
                    return <MapView.Marker
                        key={resturant.name}
                        title={resturant.name}
                        coordinate={{
                            latitude: resturant.geometry.location.lat,
                            longitude: resturant.geometry.location.lng,
                        }}
                    >
                        <MapView.Callout
                        onPress={()=> navigation.navigate('ResturantsDetails',{
                            resturant
                        })}
                        >
                            <MapCallout restaurant ={resturant}/>
                        </MapView.Callout>
                    </MapView.Marker>
                })}
            </Map>
        </>
    )
}