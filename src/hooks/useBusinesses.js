import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('yuurr')
        try {
       const response = await yelp.get('/search', {
           params: {
               limit: 50,
               term: searchTerm,
               location: 'New York',
           }
       });
       setBusinesses(response.data.businesses);
    } catch (err) {
        setErrorMessage('Whoops! Look\'s like something went wrong!');
    }
    };

    // Call searchApi only on initial render 
   
    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, businesses, errorMessage]
};