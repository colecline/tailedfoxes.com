async function getUser(req, res) {
    return res.status(200).json(req.params);
}

module.exports = {
    getUser
}