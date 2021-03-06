import axios from "axios";

export default {
    postGig: data => {
        return axios.post("/api/gigs", data);
    },
    deleteThisGig: data => {
        return axios.delete("/api/gigs/" + data);
    },
    getGigs: data => {
        return axios.get("/api/gigs/unbooked/" + data);
    },
    getBookedGigs: data => {
        return axios.get("/api/gigs/booked/" + data);
    }
}