import axios from "axios";

export default {
    // Gets all gigs
    getGigs: function(data) {
      return axios.get("/api/artists");
    },

    getArtistInfo: () => {
      return axios.get("/api/artists");
    },

    update: function(data) {
      return axios.put("/api/artists", data);
    }
};