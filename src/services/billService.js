import axiosClient from "./axiosClient";

const billService = {
    getAllBills: async (payment) => {
        const url = '/bill/list-all';
        const res = await axiosClient.get(url);
        return res;
    },
    getAllForAdmin: async () => {
        const url = "/admin/order/";
        const res = await axiosClient.get(url);
        return res;
    }
}

export default billService;