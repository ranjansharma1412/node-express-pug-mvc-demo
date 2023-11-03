import mongoose from 'mongoose';
import Config from './constants/config.js';

export const dbConnection = async () => {
    try {
        mongoose.connect(Config.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("DB Connection successfully")
        });
    } catch (error) {
        console.log("DB Connection failed", error)
    }
}
