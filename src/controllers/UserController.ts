import { Request, Response, Router } from 'express';
import express from 'express';
import { User } from '../entity/User';
import { UserService } from '../service/userService';
import { getRepository, getManager } from 'typeorm';
import multer from 'multer';

import multerConfig from '../config/multer';

const userRoutes: Router = Router();

interface TesteRequest extends express.Request {
    location: string;
}
    
userRoutes
    .route('/')
    .post( 
        multer(multerConfig).single('file'),
        async (req:Request, res: Response ): Promise<Response> => {
                
                let userNew = new User();
                userNew.firstName = req.body.firstName;
                userNew.lastName = req.body.lastName;
                userNew.password = req.body.password;
                userNew.fotoUrl = req.file.location;
                    
        
                const userService = new UserService();
                const userRepository = getManager().getRepository(User);
                userNew = userRepository.create(userNew);
                userNew = await userService.insertOne(userNew);
                return res.json(userNew);
            
            
        }
    )
 


export default userRoutes;