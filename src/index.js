import mongoose from "mongoose";

import { DB_NAME } from "./constants.js";

import express from "express"
const app = express();

import connectDB from "./db/index.js";

configDotenv.config({
    path: "./env"
})

connectDB()


/*( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        });
    } catch (error) {
        console.error("Error:", error)
        process.exit(1);
    }
})()

import mongoose { DB NAME } from "./constants";
import express from "express";
const app = express();

(async() => {
    try {
        await mongoose .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.listen (process.env.PORT, () => {
            console.log(`Server is running on the port ${process.env.PORT}`)
        });
    } catch (error) {
        console.log("Error:", error)
        throw new Error("Failed to connect to the database")
    }
})
*/