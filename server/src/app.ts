import express, { Express } from "express";
import cors from "cors";
import allRoutes from "./routes";
import * as bodyParser from "body-parser";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(allRoutes);
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
