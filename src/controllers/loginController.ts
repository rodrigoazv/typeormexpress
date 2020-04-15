import bcrypt from "bcrypt";
import { NextFunction, Request, Response, Router } from "express";

import { UserService } from '../service/userService';

import { User } from '../entity/User';

import { AuthHandler } from "../middleware/authHandler.middleware";

const loginRouter: Router = Router();

loginRouter.route('/').post(
    async(req: Request, res: Response) =>{
        const userService = new UserService();
        const authHandler = new AuthHandler();
        const user: User = await userService.getByLogin(req.body.id);
        const isPasswordCorrect: boolean = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!user || !isPasswordCorrect ) {
            res.json({
                success: false,
              });
    
    
          }
        const token: string = authHandler.generateToken(user);
        res.json({
          success: true,
          token
        });

    }
)

export default loginRouter;