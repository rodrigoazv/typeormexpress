import {Request, Response} from 'express';
import {Router} from 'express';

//controllers import
import UserController from './controllers/UserController';

const routes: Router = Router();

routes.use('/user', UserController.index);
routes.use('/user', UserController.input);
routes.use('/user/:id', UserController.indexId);

module.exports = routes;