const UserController = (function () {
    const baseUrl = "http://localhost:4000";

    const send = async (method, path, data) => {
        try {
            let response = null;
            if (data) {
                response = await fetch(baseUrl + path, {
                    method,
                    body: JSON.stringify(data),
                });
            } else {
                response = await fetch(baseUrl + path, {
                    method,
                });
            }
            response = await response.json();
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    return (module = {
        getUser: async () => {
            return await send(
                "GET",
                "/recruiters/632e3f93538a67e9e21cd068",
                null
            );
        },
    });
})();

export default UserController;
