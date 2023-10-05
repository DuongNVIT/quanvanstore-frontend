import axiosClient from "./axiosClient";

const imagesService = {
    getAll: async () => {
        const url = "/images/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    },
    searchProducts: async (name, startPrice, endPrice, categoryId, page = 0, size = 10) => {
        // const url = `/product/list-all?name=${name?name:""}&startPrice=${startPrice?startPrice:""}&endPrice=${endPrice?endPrice:""}&categoryId=${categoryId?categoryId:""}&page=${page?page:""}&size=${size?size:""}`;
        const url = `/product/list-all?name=${name ? name : ""}&startPrice=${startPrice ? startPrice : ""}&endPrice=${endPrice ? endPrice : ""}&categoryId=${categoryId?categoryId:""}&page=${page}&size=${size}`;
        const ans = await axiosClient.get(url);
        return ans;
    },
    getAllForAdmin: async () => {
        const url = "/admin/images/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    },
    uploadImage: async (image) => {
        const url = '/admin/images/'
        const ans = await axiosClient.post(url, image)
        return ans;
    },
    deleteImage: async (imageId) => {
        const url = `/admin/images/${imageId}`;
        const ans = await axiosClient.delete(url);
        return ans;
    },
    updateImage: async (imageId) => {
        const url = `/admin/images/${imageId}`;
        console.log(url);
        const ans = await axiosClient.put(url);
        return ans;
    },
}

export default imagesService;