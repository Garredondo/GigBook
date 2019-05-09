import axios from "axios";

export default {
    postGig: data => {
        return axios.post("/api/gigs", data);
    }
}