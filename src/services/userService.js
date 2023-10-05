import axiosClient from "./axiosClient";

const userService = {
    getAll: async () => {
        const url = "/admin/user/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    },
    deleteUser: async (userId) => {
        const url = `/admin/user/${userId}`
        const ans = await axiosClient.delete(url);
        return ans;
    },
    updateUser: async (profile) => {
        const url = '/profile'
        const res = await axiosClient.put(url, profile);
        return res;
    }
}

export default userService;