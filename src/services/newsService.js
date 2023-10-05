import axiosClient from "./axiosClient";

const newsService = {
    getAll: async () => {
        const url = "/news/list-all";
        const ans = await axiosClient.get(url);
        return ans;
    },
    getOneNews: async (newsId) =>  {
        const url = `/news/${newsId}`;
        const ans = await axiosClient.get(url);
        return ans;
    },
    addNews: async (news) => {
        const url = '/admin/news/'
        const ans = await axiosClient.post(url, news)
        return ans;
    },

    getAllForAdmin: async () => {
        const url = '/admin/news/list-all';
        const ans = await axiosClient.get(url);
        return ans;
    },

    deleteNews: async (newsId) => {
        const url = `/admin/news/${newsId}`;
        const ans = await axiosClient.delete(url);
    },

    updateNews: async (news) => {
        const url = `/admin/news/`;
        const ans = await axiosClient.put(url, news);
    }
}

export default newsService;