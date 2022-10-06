import {Get, Post, Put} from './Requests'
const JobSeekerController = (function () {
    return (module = {
        getJobSeeker: async () => {
            return await Get(
                "/jobseeker/profile",
            );
        },
        addJobSeeker: async (body) => {
            return await Post(
                "/jobseeker/add",
                body
            );
        },
        updateJobSeeker: async (body) => {
            return await Put(
                "/jobseeker/update",
                body
            );
        },
        getAllJobSeeker: async () => {
            return await Get(
                "/jobseeker/viewall",
            );
        },
    });
})();

export default JobSeekerController;
