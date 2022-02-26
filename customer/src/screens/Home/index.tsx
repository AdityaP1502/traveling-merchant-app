import React from 'react'

import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import { merchant } from '../../models'

import { StackScreenProps } from '@react-navigation/stack';

type Params = {
    Merchant: {
        id: number
    }
}
export default ({ navigation }: StackScreenProps<Params>) => {
    const [ data, setData ] = React.useState<merchant[]>([])

    React.useEffect(() => {
        setData([
            {
                merchant_id: 1,
                name: "Pak Sutomo",
                description: "Ketoprak",
                coordinate: {
                    longitude: 107.594,
                    latitude: -6.904
                }
            },
            {
                merchant_id: 2,
                name: "Pak Bowo",
                description: "Sol Sepatu",
                coordinate: {
                    longitude: 107.6067742,
                    latitude: -6.9171595
                }
            },
            {
                merchant_id: 3,
                name: "Pak Jack",
                description: "Ketoprak",
                coordinate: {
                    longitude: 107.608238,
                    latitude: -6.914864,
                }
            }
        ])
    }, [])


    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    longitude: 107.608238,
                    latitude: -6.914864,
                    longitudeDelta: 0.02,
                    latitudeDelta: 0.02
            }}>
                {
                    data.map((merchant) => {
                        return(
                            <Marker
                                key={merchant.merchant_id.toString()}
                                coordinate={{
                                    latitude: merchant.coordinate.latitude,
                                    longitude: merchant.coordinate.longitude
                                }}
                                title={merchant.name}
                                description={merchant.description}
                            >
                                <Callout onPress={() => {
                                    navigation.navigate('Merchant', { id: merchant.merchant_id })
                                }}/>
                            </Marker>
                        )
                    })
                }
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
