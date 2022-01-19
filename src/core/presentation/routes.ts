import express from "express";
import { AuthRouter } from "../../features/authentication/presentation/routes/auth-router";
import { ProjectRouter } from "../../features/projects/presentation/routes/project-router";
import { UserRouter } from "../../features/user/presentation/routes/user-routes";

export const makeRoutes = (app: express.Application) => {
    app.use("/user", UserRouter.getRoutes());
    app.use("/auth", AuthRouter.getRoutes());
    app.use("/project", ProjectRouter.getRoutes());
};
