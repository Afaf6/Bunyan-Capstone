const mongoose = require ("mongoose");

const connection_DB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection_DB;