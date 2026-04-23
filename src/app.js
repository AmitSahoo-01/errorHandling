import express from "express";
import authRouter from "./routers/app.routes.js";
import errorHandler from "./middleware/errorHandle.middleware.js";



const app = express();

app.use("api/auth",authRouter);

app.use(errorHandler);


export default app;