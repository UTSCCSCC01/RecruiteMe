const AuthenticationController = (function() {
    let baseURL = 'http://localhost:4000';
    const login = async (username, password) => {
        const response = await fetch(baseURL + "/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        return response;
    }

    const register = async (email, password, recruiter) => {
        const response = await fetch(baseURL + "/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                recruiter: recruiter.toString(),
            }),
        });
        return response;
    }

    return (module = {
        login,
        register
    });
})();

export default AuthenticationController;