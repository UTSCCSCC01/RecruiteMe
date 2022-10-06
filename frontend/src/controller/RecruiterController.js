import {Get, Post, Put} from './Requests'
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
    });
})();

export default RecruiterController;
