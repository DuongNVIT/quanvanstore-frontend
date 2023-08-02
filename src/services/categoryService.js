import axiosClient from "./axiosClient";

const categoryService = {
    getAll: async () => {
        const url = "/category/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    }
}

export default categoryService;