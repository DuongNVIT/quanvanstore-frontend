import axiosClient from "./axiosClient";

const uploadService = {
    uploadImage: async (imageFile) => {
        const data = new FormData();
        data.append('file', imageFile);
        data.append('upload_preset', 'rubygymimages');

        const option = {
            method: 'POST',
            body: data
        }
        let response = await fetch('https://api.cloudinary.com/v1_1/dzgdwey0f/image/upload', option);

        console.log(response);
        const file = await response.json();
        return file;
    },
}

export default uploadService;