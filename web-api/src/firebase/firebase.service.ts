import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { Request } from "express";

@Injectable()
export class FirebaseService {

    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>
    ) {
        
    }

    async findOne(email: string) {
        const user = await this.userModel.findOne({email: email})
        return user;
    }

    async validate(req: Request, auth: {isAuthorized: boolean}) {
        const cookies = Object.keys(req.cookies);
        const session: string[] = [];

        cookies.forEach((cookieKey: string) => {
            const prefix = cookieKey.substring(0, cookieKey.indexOf('.'));
            const hashCode = cookieKey.substring(cookieKey.indexOf('.'));
            session.push(cookieKey)
            session.push(req.headers[prefix.toLocaleLowerCase() + hashCode].toString());
        });

        const email = session.find((value: string) => value.endsWith('@electronic-shop.com'));
        const user = await this.findOne(email);

        auth.isAuthorized = !!(user &&
        session.includes(user.headerTokenKey) &&
        session.includes(user.headerTokenValue) &&
        session.includes(user.requestTokenKey) &&
        session.includes(user.requestTokenValue));

    }
}
