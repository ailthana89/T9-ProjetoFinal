import axios from 'axios';

const api = axios.create({
    headers: {
        // "Accept": "application/vnd.twitchtv.v5+json",
        // "Client-ID": "uo6dggojyb8d6soh92zknwmi5ej1q2",
        // "video": "631931328"
    }

});

export default api;

