import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
    ) {}


    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        console.log(username + "   " + pass)
        console.log("------------")
        console.log(user);
        if (user.userid == username && user.password == pass) {
            const { password, ...result } = user;
            // result는 password 를 제외한 user의 모든 정보를 포함한다.
            return result;
        }
        return null;
    }

}
