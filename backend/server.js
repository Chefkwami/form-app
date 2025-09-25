import dotenv from "dotenv";
import express from "express";
import connectToDB from "./config/db.js";
const PORT = process.env.PORT || 5000
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import emailRout from "./route/emailRoute.js"





const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();


app.use(express.json());
app.use("/api/emails", emailRout)

connectToDB();





app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
    console.log(process.env.MONGO_URI ? "Loaded" : "not found")
})