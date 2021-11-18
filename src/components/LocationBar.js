import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const LocationBar = ({}) => {
    return (
        <View style={styles.backgroundStyle}> 
            <Feather name='map-pin' style={styles.iconStyle}/>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} placeholder='Zipcode'
            />
        </View>
    );
}; 

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default LocationBar