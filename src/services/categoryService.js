import axiosClient from "./axiosClient";

const categoryService = {
    getAll: async () => {
        const url = "/category/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    },
    createCategory: async (category) => {
        const url = "/admin/category/";
        const ans = await axiosClient.post(url, category);
        return ans;
    },
}

export default categoryService;