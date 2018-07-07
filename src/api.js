import axios from 'axios';

const API_BASE_URL = 'http://localhost:9002';

class Api {
    static login (credentials) {
        return axios.post(`${API_BASE_URL}/login`, { credentials })
            .then(({ data: res }) => res)
            .catch(({ data: res }) => res);
    }

    static addAsset (asset) {
        return axios.post(`${API_BASE_URL}/banners`, { asset })
            .then(({ data: res}) => res)
            .catch(({ data: res }) => res);
    }
}

export default Api;