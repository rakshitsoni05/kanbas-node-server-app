import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import UserRoutes from "./users/routes.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import "dotenv/config";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

    mongoose
        .connect(CONNECTION_STRING)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        })

const app = express();

app.use(cors({
                 origin: process.env.FRONTEND_URL,
                 methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
                    credentials: true

             }));

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json());
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);


