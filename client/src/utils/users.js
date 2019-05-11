import axios from "axios";

export default {
    signUp: data => {
        return axios.post("/api/users", data);
    },
    login: data => {
        return axios.post("/api/login", data);
    },
    logout: () => {
        return axios.get("/logout");
    },
    isAuthed: () => {
        return axios.get("/isAuthed");
    },
    deleteProfile: id => {
        return axios.delete("/api/users", id);
    }
}