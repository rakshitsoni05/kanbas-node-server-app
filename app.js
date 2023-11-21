import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
const app = express();

app.use(express.json());

app.use(cors());
app.use(express.json());
Lab5(app);
Hello(app)
CourseRoutes(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);


