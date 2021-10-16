import axios from 'axios'

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "http://homestead.test/api/", headers: {
            // make sure we get JSON back
            Accept: "application/json"
    }, 
});
