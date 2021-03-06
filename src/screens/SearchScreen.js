import React, { useState } from 'react'; 
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import LocationBar from '../components/LocationBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [searchApi, businesses, errorMessage] = useBusinesses();

    const filterBusinessesByPrice = (price) => {
        return businesses.filter(business => {
            return business.price === price;
        });
    };

    return (
        <View style={styles.background}>
            
            <LocationBar location={location}
            onTermChange={setLocation}
            />
        
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term, location)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <BusinessesList businesses={filterBusinessesByPrice('$')} title='Cost Effective'
                 />
                <BusinessesList businesses={filterBusinessesByPrice('$$')} title='Bit Pricier'
                 />
                <BusinessesList businesses={filterBusinessesByPrice('$$$')} title='Big Money'
                 />
                <BusinessesList businesses={filterBusinessesByPrice('$$$$')} title='Extravagent'
                 />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(350, 127, 127)',
    }
});

export default SearchScreen;