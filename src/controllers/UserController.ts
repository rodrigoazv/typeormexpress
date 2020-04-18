import { Request, Response, Router } from 'express';
import { User } from '../entity/User';
import { UserService } from '../service/userService';
import { getManager } from 'typeorm';

class UserController {
    public async uploadImage(req: Request, res: Response) {
        let userNew = new User();
        userNew.firstName = req.body.firstName;
        userNew.lastName = req.body.lastName;
        userNew.password = req.body.password;
        userNew.fotoUrl = req.file.destination;
        const userService = new UserService();
        const userRepository = getManager().getRepository(User);
        userNew = userRepository.create(userNew);
        userNew = await userService.insertOne(userNew);
        return res.json(userNew);
    }
}

export default new UserController();