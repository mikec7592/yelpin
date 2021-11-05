import React, { useState } from 'react'; 
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessesList from '../components/BusinessesList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, businesses, errorMessage] = useBusinesses();

    const filterBusinessesByPrice = (price) => {
        return businesses.filter(business => {
            return business.price === price;
        });
    };

    return (
        <>
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
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
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;