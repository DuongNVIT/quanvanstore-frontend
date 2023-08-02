import axiosClient from "./axiosClient";

const paymentService = {
    order: async (payment) => {
        const url = '/payment/';
        const res = await axiosClient.post(url, payment);
        return res;
    },
}

export default paymentService;