import axios from 'axios'

const instance = axios.create({
    // cloud funcitons url
    baseURL: 'http://localhost:5001/clone-app-7c10f/us-central1/api'

});
export default instance;