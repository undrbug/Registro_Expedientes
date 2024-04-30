import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    const client = new MongoClient(process.env.MONGO_URI);
    try {
        client.connect();
        console.log("MongoDB connected");
        return client;
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        throw error;
    } finally {
        console.log("Closing connection");
    }
    // await client.close();
}

export const getCollection = async (db = "registro", collection) => {
    
    let arr = [];
    let client;
    try {
        client = await connectDB();        
        arr = await client.db(db).collection(collection).find().toArray();
        arr = arr.map((element) => element.nombre);
    } catch (e) {
        console.error(e);
    } finally {
        if (client) {
            console.log("Closing connection");
            // await client.close();
        }
        // console.log(arr);
        return arr;
    }
}