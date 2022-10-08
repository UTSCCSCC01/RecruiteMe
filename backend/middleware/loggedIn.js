
const loggedIn = async (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(401).send("login first")
    }
}

module.exports = { loggedIn }