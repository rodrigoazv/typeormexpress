import {Request, Response} from 'express';
import {Router} from 'express';

//controllers import
import userRoutes from './controllers/UserController';
import loginRoutes from './controllers/loginController';

const routes: Router = Router();

routes.use('/user', userRoutes);
routes.use('/login', loginRoutes);


module.exports = routes;