import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ym25zLB2jlvEstIDSXDKxsr50dWTrw6HOoFy0JupQM3Q-PLq-4EHhYWaiG_s4o3I4ftB-a3dsPygUvx2vM0WeotsR36ppKEJ-PwCYo4mx5UERLL9bnOi3rkieCFXYXYx'
    }
});
