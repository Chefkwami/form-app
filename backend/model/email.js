import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Please provide a valid email address",
        ],
    }
}, { timestamps: true });

const Email = mongoose.model("Email", emailSchema)

export default Email;