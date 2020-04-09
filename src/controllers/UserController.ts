import { Request, Response } from 'express';
import { User } from '../entity/User';
import { UserService } from '../service/userService';

class UserController{
    public async index(req: Request , res: Response){
        const userService = new UserService();
        const user: User[] = await userService.getAll();

        return res.json(user);
    }
}

export default new UserController();