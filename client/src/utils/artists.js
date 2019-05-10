import axios from "axios";

export default {
    // Gets all gigs
    getGigs: function() {
      return axios.get("/api/artists");
    },

    getArtistInfo: data => {
      return axios.get("api/artists", data);
    },

    update: function() {
      return axios.put("/api/artists");
    }
};