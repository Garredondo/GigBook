import axios from "axios";

export default {
    // Gets a specific venue info
    getVenueInfo: data => {
        return axios.get("/api/venues", data);
    },
    getUnbookedGigs: data => {
        return axios.get("/api/venues/unbooked/" + data);
    }
};