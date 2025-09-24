import dotenv from "dotenv";
import express from "express";
import connectToDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";






const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });



connectToDB();

const app = express();
const PORT = process.env.PORT || 5000



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
    console.log(process.env.MONGO_URI ? "Loaded" : "not found")
})