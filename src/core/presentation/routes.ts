import express from "express";
import { AuthRouter } from "../../features/authentication/presentation/routes/auth-router";
import { UserRouter } from "../../features/user/presentation/routes/user-routes";

export const makeRoutes = (app: express.Application) => {
    app.use("/user", UserRouter.getRoutes());
    app.use("/auth", AuthRouter.getRoutes());
};
