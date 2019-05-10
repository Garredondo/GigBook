import axios from "axios";

export default {
    // Gets a specific venue info
    getVenueInfo: data => {
        return axios.get("/api/venues", data);
    },

    // Gets all venue's gigs
    // getVenueGigs: function() {
    //     return axios.get("/api/venues");
    // }
};