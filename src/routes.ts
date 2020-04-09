import {Request, Response} from 'express';
import {Router} from 'express';

//controllers import
import UserController from './controllers/UserController';

const routes: Router = Router();

routes.use('/user', UserController.index);

module.exports = routes;