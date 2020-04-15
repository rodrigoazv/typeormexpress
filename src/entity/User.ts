import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Unique}  from "typeorm";
import bcrypt from 'bcrypt';

@Entity()
@Unique(['firstName', 'lastName'])
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    async setPassword(newPassword: string) {
        this.password = await bcrypt.hash(newPassword, 10);
    }
    
      @BeforeInsert()
      async encryptPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

}