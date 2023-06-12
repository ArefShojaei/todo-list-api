const mongoose = require("mongoose");
const {
    mongodb: { url },
} = require("@configs/database-config");

module.exports = async () => {
    try {
        const connection = await mongoose.connect(url)
        console.log("Database was connected successfully.");


        return connection
    } catch (err) {
        console.log(`Database was not connected! - ${err}`);
    }
};
