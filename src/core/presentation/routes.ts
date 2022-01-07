import express from 'express';
import { UserRouter } from '../../features/user/presentation/routes/user-routes';

export const makeRoutes = (app: express.Application) => {
    app.use('/user', UserRouter.getRoutes());
}