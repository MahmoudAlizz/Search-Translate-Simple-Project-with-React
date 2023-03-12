import axios from "axios";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResualts:5,
        key:"AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg"
    }
})