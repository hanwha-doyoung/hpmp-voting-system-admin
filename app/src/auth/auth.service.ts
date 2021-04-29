import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {pseudoRandomBytes} from "crypto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
    ) {
        this.usersService = usersService;
    }


    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user.userid == username && user.password == pass) {
            const { password, ...result } = user;
            console.log(user);
            // result는 password 를 제외한 user의 모든 정보를 포함한다.
            return result;
        }
        return null;
    }

}
