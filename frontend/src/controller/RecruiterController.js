import {Get, Post, Put, PostFile, PutFile} from './Requests'
const RecruiterController = (function () {
    return (module = {
        getRecruiter: async () => {
            return await Get(
                "/recruiter/profile",
            );
        },
        addRecruiter: async (body) => {
            return await Post(
                "/recruiter/add",
                body
            );
        },
        updateRecruiter: async (body) => {
            return await Put(
                "/recruiter/update",
                body
            );
        },
        getAllRecruiter: async () => {
            return await Get(
                "/recruiter/viewall",
            );
        },
        addPfp: async (body) => {
            const formData = new FormData();
            formData.append("image", body);
            return await PostFile(
                "/recruiter/addpfp",
                formData
            );
        },
        updatePfp: async (body) => {
            const formData = new FormData();
            formData.append("image", body);
            return await PutFile(
                "/recruiter/updatepfp",
                formData
            );
        },
        getPfp: async () => {
            return await Get(
                "/recruiter/profilepicture"
            );
        },
        addResume: async (body) => {
            const formData = new FormData();
            formData.append("resume", body);
            return await PostFile(
                "/recruiter/addresume",
                formData
            );
        },
        updateResume: async (body) => {
            const formData = new FormData();
            formData.append("resume", body);
            return await PutFile(
                "/recruiter/updateresume",
                formData
            );
        },
        getResume: async () => {
            return await Get(
                "/recruiter/resume"
            );
        },
        getPost: async () => {
            return await Get(
                "/recruiter/myposts"
            )
        },
        addJobPost: async (body) => {
            return await Post(
                "/recruiter/addjobpost",
                body
            );
        },
        viewId: async (body) => {
            return await Get(
                "/recruiter/view/"+body
            )
        }

    });
})();

export default RecruiterController;
