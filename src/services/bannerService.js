import axiosClient from "./axiosClient";

const bannerService = {
    getAll: async () => {
        const url = "/admin/banner/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    },
    addBanner: async (banner) => {
        const url = '/admin/banner/'
        const ans = await axiosClient.post(url, banner)
        return ans;
    },
    updateBanner: async (bannerId) => {
        const url = `/admin/banner/?bannerId=${bannerId}`
        const ans = await axiosClient.put(url);
        return ans;
    },
    getBanner: async () => {
        const url = "/banner/";
        const res = await axiosClient.get(url);
        return res;
    }
}

export default bannerService;