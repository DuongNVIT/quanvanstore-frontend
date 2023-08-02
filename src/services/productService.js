import axiosClient from "./axiosClient";

const productService = {
    getAll: async () => {
        const url = "/product/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    },
    getProduct: async (productId) => {
        const url = `/product/?productId=${productId}`;
        console.log(url);
        const ans = await axiosClient.get(url);
        return ans;
    },
    searchProducts: async (name, startPrice, endPrice, categoryId, page = 0, size = 10) => {
        // const url = `/product/list-all?name=${name?name:""}&startPrice=${startPrice?startPrice:""}&endPrice=${endPrice?endPrice:""}&categoryId=${categoryId?categoryId:""}&page=${page?page:""}&size=${size?size:""}`;
        const url = `/product/list-all?name=${name ? name : ""}&startPrice=${startPrice ? startPrice : ""}&endPrice=${endPrice ? endPrice : ""}&categoryId=${categoryId?categoryId:""}&page=${page}&size=${size}`;
        const ans = await axiosClient.get(url);
        return ans;
    },
    addProduct: async (product) => {
        const url = '/admin/product/'
        const ans = await axiosClient.post(url, product)
        return ans;
    },
    deleteProduct: async (productId) => {
        const url = `/admin/product/?productId=${productId}`;
        const ans = await axiosClient.delete(url);
        return ans;
    }
}

export default productService;