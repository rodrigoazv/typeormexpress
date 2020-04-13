import {Request, Response} from 'express';
import {Router} from 'express';

//controllers import
import UserController from './controllers/UserController';

const routes: Router = Router();

routes.use('/users', UserController.index);
routes.use('/user', UserController.input);
routes.use('/userid/:id', UserController.indexId);

module.exports = routes;