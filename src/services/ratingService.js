import axiosClient from "./axiosClient";

const ratingService = {
    getAll: async (productId) => {
        const url = `/rating/list-all?productId=${productId}`;
        const ans = await axiosClient.get(url);
        return ans;
    },
    rate: async (rate) =>  {
        const url = `/rating/`;
        const ans = await axiosClient.post(url, rate);
        return ans;
    }
}

export default ratingService;