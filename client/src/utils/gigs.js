import axios from "axios";

export default {
    postGig: data => {
        return axios.post("/api/gigs", data);
    },
    deleteThisGig: data => {
        return axios.delete("/api/gigs/" + data);
    },
    getUnbookedGigs: data => {
        return axios.get("/api/gigs/unbooked/" + data);
    }
}