'use server'
import mongoose from "mongoose";

// fnc kết nối đến database 
// sử dụng design pattern singleton connection (check nếu mà đã kết nối rồi thì không kết nối nữa nếu mà chưa kết nối thì kết nối)
let isConnected: boolean = false;
export const connectToDatabase = async () => {
    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not set")
    }
    if (isConnected) {
        console.log("MONGODB_URL is already connected");
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "ucademy"
        })
        isConnected = true;
        console.log("Using new database connection");

    } catch (error) {
        console.log("Error while connecting to database", error);
    }
}