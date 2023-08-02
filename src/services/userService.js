import axiosClient from "./axiosClient";

const userService = {
    getAll: async () => {
        const url = "/admin/user/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    }
}

export default userService;