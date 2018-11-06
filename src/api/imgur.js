import qs from 'qs';
import axios from 'axios'

const CLIENT_ID = "df9ba42d76038a2";
const ROOT_URL = "https://api.imgur.com"
export default {

    login: function() {
        const queryString = {
            client_id : CLIENT_ID,
            response_type: 'token'
        };

     window.location =   `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}` 
     //window.location will redirect user to the given URL
     //Using the qs library means we can take the object queryString and turn it into a readable string ready to be put into an URL


    },

    fetchImages(token){
        return axios.get(`${ROOT_URL}/3/account/me/images`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}