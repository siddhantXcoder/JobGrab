import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; // Corrected import statement
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from './routes/company.js';
import jobRoute from "./routes/job.js"
import applicationRoute from "./routes/application.js";

dotenv.config({});

const app = express();
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Invoke as a function

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
};

app.use(cors(corsOptions));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

app.get("/", (req,res) => {
    res.send("Hello World!");
})
