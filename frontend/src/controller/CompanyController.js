import { Get, Post, Put, PostFile, PutFile } from "./Requests";
const CompanyController = (function () {
    return (module = {
        addCompany: async (body) => {
            return await Post("/company/add", body);
        },

        getCompany: async (id) => {
            return await Get(`/company/view/${id}`);
        },
        updateCompany: async (body) => {
            return await Put("/company/update", body);
        },
        addCompanyReview: async (body) => {
            return await Post("/company/review", body);
        },
        addPfp: async (body, body2) => {
            const formData = new FormData();
            formData.append("image", body);
            formData.append("compandId", body2);
            return await PostFile("/company/addpfp", formData);
        },
        updatePfp: async (body, body2) => {
            const formData = new FormData();
            formData.append("image", body);
            formData.append("compandId", body2);
            return await PutFile("/company/updatepfp", formData);
        },
        getPfp: async (id) => {
            return await Get(`/company/othersprofilepicture/${id}`);
        },
    });
})();

export default CompanyController;
