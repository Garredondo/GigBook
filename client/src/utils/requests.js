import axios from "axios";

export default {
    bookGigAsArtist: data => {
        return axios.post("/api/requests", data);
    }
}