import axios from 'axios';

const Call = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "06a7e2639613ef36886186bf8b5f068c",
    },
});

export default Call;