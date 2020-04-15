import {Request, Response} from 'express';
import {Router} from 'express';

//controllers import
import userRoutes from './controllers/UserController';

const routes: Router = Router();

routes.use('/user', userRoutes);


module.exports = routes;