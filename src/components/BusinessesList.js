import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import BusinessesDetail from './BusinessesDetail';

const BusinessesList = ({ title, businesses, navigation }) => {
    if (!businesses.length) {
        return null;
    }
    return (
        <View style={styles.container} >
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={businesses}
                keyExtractor={(business) => business.id }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('BusinessShow', { id: item.id })}>
                            <BusinessesDetail business={item} />
                        </TouchableOpacity>
                        )
                    }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 5,
        
    }
});

export default withNavigation(BusinessesList);