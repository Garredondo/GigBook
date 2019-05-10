import axios from "axios";

export default {
    postGig: data => {
        return axios.post("/api/gigs", data);
    },

    
    // Delete Gigs
    deleteGig: function(id){
        return axios.delete("/api/gigs", id);
    }
}


    
