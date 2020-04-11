 import { getManager, Repository } from "typeorm";

 import { User } from "../entity/User";

 export class UserService {
    userRepository: Repository<User>;

    constructor(){
        this.userRepository = getManager().getRepository(User);
    }

      /**
   * Returns array of all users from db
   */
    async getAll() {
        return await this.userRepository.find();
    }
    async getById(id: string) {
      return await this.userRepository.findOne(id);
    }
    
    async insert(data: User): Promise<User>{
      const newUser = this.userRepository.create(data);
      return await this.userRepository.save(newUser);   
  
    }


 }