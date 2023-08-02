import axiosClient from "./axiosClient";

const cartService = {
    getCart: async () => {
        const url = '/cart/list-all';
        const res = await axiosClient.get(url);
        return res;
    },
    decrease: async (cartItemId) => {
        const url = `/cart/decrease?cartItemId=${cartItemId}`;
        const res = await axiosClient.put(url);
        return res;
    },
    increase: async (cartItemId) => {
        const url = `/cart/increase?cartItemId=${cartItemId}`;
        const res = await axiosClient.put(url)
        return res;
    },
    delete: async (cartItemId) => {
        const url = `/cart/?cartItemId=${cartItemId}`;
        const res = await axiosClient.delete(url);
        return res;
    },
    addToCart: async (productId, quantity) => {
        const url = `/cart/?productId=${productId}&quantity=${quantity}`;
        const res = await axiosClient.post(url);
        return res;
    }
}

export default cartService;