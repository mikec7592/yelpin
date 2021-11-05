import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import BusinessShowScreen from './src/screens/BusinessShowScreen';

const navigator = createStackNavigator(
  {
  Search: SearchScreen,
  BusinessShow: BusinessShowScreen,
},
 {
  initialRouteName: 'Search' ,
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);

//   Client ID
// GnlHJadneItQcEvOZZj1cA

// API Key
// ym25zLB2jlvEstIDSXDKxsr50dWTrw6HOoFy0JupQM3Q-PLq-4EHhYWaiG_s4o3I4ftB-a3dsPygUvx2vM0WeotsR36ppKEJ-PwCYo4mx5UERLL9bnOi3rkieCFXYXYx

// GET https://api.yelp.com/v3/businesses/search
// GET https://api.yelp.com/v3/businesses/{id}
