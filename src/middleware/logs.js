const getRequest = (req, res, next) => {
    console.log("Requesting To Path ", req.path);
    next();
}

module.exports = getRequest;