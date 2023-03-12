import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID wQ2e3OD4QNbJZwAfSBPR6HeRTssLOK1fQQAws1nQdbI'
    }
});