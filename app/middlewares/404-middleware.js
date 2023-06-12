module.exports = (req, res, next) => {
    return res.status(404).json({
        status : "Error",
        code : 404,
        message : "Rotue not found!"
    })
}