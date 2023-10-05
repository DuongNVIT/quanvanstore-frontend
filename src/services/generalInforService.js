import axiosClient from "./axiosClient";

const generalInforService = {
    getInfor: async (newsId) =>  {
        const url = `/infor/`;
        const ans = await axiosClient.get(url);
        return ans;
    },
    updateInfor: async (infor) => {
        const url = '/admin/infor/'
        const ans = await axiosClient.put(url, infor)
        return ans;
    },
    uploadInfor: async (infor) => {
        const url = '/admin/infor/';
        const ans = await axiosClient.post(url, infor)
        return ans;
    }
}

export default generalInforService;