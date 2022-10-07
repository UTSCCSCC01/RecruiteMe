    const baseUrl = "http://localhost:4000";

    const Get = async (path) => {
        try {
            let response = null;
            response = await fetch(baseUrl + path, {
                method: 'GET',
                credentials: 'include',
            });
            response = await response.json();
            return response;
        } catch (err) {
            console.log(err);
        }
    };
    const Post = async (path, data) => {
        try {
            let response = null;
            response = await fetch(baseUrl + path, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
                return response;

        } catch (err) {
            console.log(err);
        }
    };
    const PostFile = async (path, data) => {
        try {
            let response = null;
            response = await fetch(baseUrl + path, {
                method: 'POST',
                credentials: 'include',
                body: data,
            });
                return response;

        } catch (err) {
            console.log(err);
        }
    };
    const PutFile = async (path, data) => {
        try {
            let response = null;
            response = await fetch(baseUrl + path, {
                method: 'PUT',
                credentials: 'include',
                body: data,
            });
                return response;

        } catch (err) {
            console.log(err);
        }
    };
    const Put = async (path, data) => {
        try {
            let response = null;
            response = await fetch(baseUrl + path, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            response = await response.json();
            return response;
        } catch (err) {
            console.log(err);
        }
    };

export {Get, Post, Put, PostFile, PutFile};