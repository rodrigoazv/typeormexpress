import {Router} from 'express';
import multer from "multer";
import config from './config/multer';

//controllers import
import loginRoutes from './controllers/loginController';
import UserController from './controllers/UserController';

const routes: Router = Router();

routes.post('/login', loginRoutes);
routes.post('/upload', multer(config).single("file"), UserController.uploadImage);

module.exports = routes;