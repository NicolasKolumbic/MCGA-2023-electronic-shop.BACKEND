import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document{
    @Prop({
        type: String,
        isRequired: true,
    })
    email: string;

    @Prop({
        type: String,
        isRequired: true,
    })
    requestTokenKey: string;
    
    @Prop({
        type: String,
        isRequired: true,
    })
    requestTokenValue: string;
    
    @Prop({
        type: String,
        isRequired: true,
    })
    headerTokenKey: string;
    
    @Prop({
        type: String,
        isRequired: true,
    })
    headerTokenValue: string;
    
    @Prop({
        type: Boolean,
    })
    online: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);