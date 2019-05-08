import axios from "axios";

export default {
    signUp: function(data) {
        return axios.post("/api/users", data);
    },
    login: function(data) {
        return axios.post("/api/login", data);
    }
}