import mongoose = require("mongoose");

export class Connection {

    public static async connect() {
        return await mongoose.connect(
            'mongodb://' +
            process.env.MONGO_USER + ':' +
            process.env.MONGO_PASS +
            '@localhost:27017/',
            {
                useNewUrlParser: true,
                dbName: process.env.MONGO_DB
            });
    }
}