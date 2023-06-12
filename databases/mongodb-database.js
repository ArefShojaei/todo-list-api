const mongoose = require("mongoose");
const {
    mongodb: { db, host, port },
} = require("@configs/database-config");

module.exports = async () => {
    try {
        const connection = await mongoose.connect(`mongodb://${host}:${port}/${db}`)
        console.log("Database was connected successfully.");


        return connection
    } catch (err) {
        console.log(`Database was not connected! - ${err}`);
    }
};
