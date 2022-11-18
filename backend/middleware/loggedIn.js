
const loggedIn = async (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(401).send("login first")
    }
}

const isRecruiter = async (req, res, next) => {
    if (req.user.recruiter) {
        next()
    } else {
        res.status(401).send("User shoud be recruiter for this operation")
    }
}

const isJobSeeker = async (req, res, next) => {
    if (!req.user.recruiter) {
        next()
    } else {
        res.status(401).send("User shoud be JobSeeker for this operation")
    }
}


module.exports = { loggedIn, isRecruiter, isJobSeeker }