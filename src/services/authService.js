import axiosClient from "./axiosClient";

const authService = {
    signIn: async (user) => {
        const url = "/signin"
        const res = await axiosClient.post(url, user);
        return res;
    },
    signup: async (user) => {
        const url = "/signup"
        const res = await axiosClient.post(url, user);
        return res;
    },
    changePass: async (oldPass, newPass, verifyPass) => {
        const url = `/change-pass?oldPass=${oldPass}&newPass=${newPass}&verifyPass=${verifyPass}`;
        const res = await axiosClient.put(url);
        return res;
    },
    getProfile: async () => {
        const url = '/profile'
        const res = await axiosClient.get(url);
        return res;
    },
    changeProfile: async (profile) => {
        const url = '/profile'
        const res = await axiosClient.put(url, profile);
        return res;
    }
}

export default authService;