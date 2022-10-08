import { Get, Post } from "./Requests";
const UserController = (function () {
    return (module = {
        login: async (body) => {
            return await Post("/auth/login", body);
        },
        register: async (body) => {
            return await Post("/auth/register", body);
        },
        getCurrent: async () => {
            return await Get("/auth/currUser");
        },
        logout: async (body) => {
            return await Post("/auth/logout", body);
        },
    });
})();

export default UserController;
