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

 }