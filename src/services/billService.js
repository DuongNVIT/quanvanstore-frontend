import axiosClient from "./axiosClient";

const billService = {
    getAllBills: async (payment) => {
        const url = '/bill/list-all';
        const res = await axiosClient.get(url);
        return res;
    },
    deleteBill: async (id) => {
        const url = `/bill/${id}`;
        const res = await axiosClient.delete(url);
        return res;
    },
    getAllForAdmin: async () => {
        const url = "/admin/order/";
        const res = await axiosClient.get(url);
        return res;
    },
    updateStatus: async (orderItem, status) => {
        const url = `/admin/order/?orderItemId=${orderItem.id}&status=${status}`;
        const res = await axiosClient.put(url);
        return res;
    }
}

export default billService;