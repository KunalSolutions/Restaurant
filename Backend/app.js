import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { ErrorMiddleware } from "./error/error.js";
import router from "./route/reservationRoute.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use("/api/v1/reservation", router);

// error middleware must be LAST
app.use(ErrorMiddleware);

export default app;