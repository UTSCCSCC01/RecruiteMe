import { Get, Post, Put, PostFile, PutFile } from "./Requests";
const JobSeekerController = (function () {
    return (module = {
        getJobSeeker: async () => {
            return await Get("/jobseeker/profile");
        },
        addJobSeeker: async (body) => {
            return await Post("/jobseeker/add", body);
        },
        updateJobSeeker: async (body) => {
            return await Put("/jobseeker/update", body);
        },
        getAllJobSeeker: async () => {
            return await Get("/jobseeker/viewall");
        },
        addPfp: async (body) => {
            const formData = new FormData();
            formData.append("image", body);
            return await PostFile("/jobseeker/addpfp", formData);
        },
        updatePfp: async (body) => {
            const formData = new FormData();
            formData.append("image", body);
            return await PutFile("/jobseeker/updatepfp", formData);
        },
        getPfp: async () => {
            return await Get("/jobseeker/profilepicture");
        },
        getPfpid: async (body) => {
            return await Get(
                "/jobseeker/othersprofilepicture/"+body
            );
        },
        addResume: async (body) => {
            const formData = new FormData();
            formData.append("resume", body);
            return await PostFile("/jobseeker/addresume", formData);
        },
        updateResume: async (body) => {
            const formData = new FormData();
            formData.append("resume", body);
            return await PutFile("/jobseeker/updateresume", formData);
        },
        getResume: async () => {
            return await Get("/jobseeker/resume");
        },
        getJobPosts: async () => {
            return await Get("/jobseeker/openjobposts");
        },
        getAllOpenJobPosts: async () => {
            return await Get(
                "/jobseeker/openjobposts"
            );
        },
        applyToJob: async (body) => {
            return await Post(
                "/jobseeker/apply",
                body
            );
        },
        viewId: async (body) => {
            return await Get(
                "/jobseeker/view/"+body
            )
        }
    });
})();

export default JobSeekerController;
