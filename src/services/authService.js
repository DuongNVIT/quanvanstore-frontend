import axiosClient from "./axiosClient";

const authService = {
    signIn: async (user) => {
        const url = "/signin"
        const res = await axiosClient.post(url, user);
        return res;
    }
}

export default authService;