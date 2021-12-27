import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-fd1c0/us-central1/api'// THE API(cloud functions)URL
});
export default instance;