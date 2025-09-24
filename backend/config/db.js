import mongoose from "mongoose"

const connectToDB = async() => {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI);


        console.log(`Database connected successfully: ${connect.connection.host}`);
    } catch (error) {
        console.error("Mongodb connection failed:", error);
        process.exit(1);
    }
};

export default connectToDB;