import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Axios from 'axios';

export default function App() {
    const [titleText, setTitleText] = useState("Pak Budi");
    const [flag, setFlag] = useState(true);
    const [loc, setLoc] = useState([0, 0])
    const bodyText = "Tukang Bakso";

    const onPressTitle = () => {
        if (flag) {
            setTitleText("Pak Budi : id = 321231");
            setFlag(false);

        } else {
            setTitleText("Pak Budi");
            setFlag(true);
        }
    };

    React.useEffect(() => {
        // Get position Data
        const pos = () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLoc([position.coords.latitude, position.coords.longitude])
            })
        }
        
        pos();
        Axios.post('https://foo.bar.com/coordinates', {
            "merchant_id" : 1321,
            "coordinates" : {
                "latitude" : loc[0],
                "longitude" : loc[1]
            }
        }) // Mengirim data ke server

    }, [])    
    console.log(loc)
    return (
        <Text >
          <Text onPress={onPressTitle}>
            {titleText}
            {"\n"}
          </Text>
          <Text>{bodyText}</Text>
        </Text>
      );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});