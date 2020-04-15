import { Request, Response, Router } from 'express';
import { User } from '../entity/User';
import { UserService } from '../service/userService';
import { getRepository, getManager } from 'typeorm';

const userRoutes: Router = Router();
userRoutes
    .route("/all")
    .get(
        async(req: Request , res: Response)=>{
            const userService = new UserService();
            const user: User[] = await userService.getAll();
            return res.json(user);
        }
    )
    
    /*    
    public async index(req: Request , res: Response){
        const userService = new UserService();
        const user: User[] = await userService.getAll();
        return res.json(user);
    }
    
    public async indexId(req: Request , res: Response){
        
        const userService = getManager().getRepository(User);
        const id: string = req.params.id;
        const user = await userService.findOne(id);
        
        return res.json(user);
    }*/
userRoutes
    .route('/')
    .post(
        async (req: Request , res: Response) => {
            let userNew = new User();
            userNew.firstName = req.body.firstName;
            userNew.lastName = req.body.lastName;
            userNew.password = req.body.password;
                
    
            const userService = new UserService();
            const userRepository = getManager().getRepository(User);
            userNew = userRepository.create(userNew);
            userNew = await userService.insertOne(userNew);
            return res.json(userNew);
            
            
        }
    )

    


export default userRoutes;