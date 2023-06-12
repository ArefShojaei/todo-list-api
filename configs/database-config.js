const { MONGODB_HOST, MONGODB_PORT, MONGODB_DB } = process.env

module.exports = {
    mongodb : {
        host : MONGODB_HOST,
        port : MONGODB_PORT,
        db : MONGODB_DB,
    }
}