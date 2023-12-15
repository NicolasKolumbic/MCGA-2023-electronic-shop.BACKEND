import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Detail{
    @Prop({
        type: mongoose.Types.ObjectId,
        required:true,
        ref:'Product'
    })
    productId:string;
    @Prop({
        required:true,
        isInteger:true
    })
    quantity:number;
    @Prop({
        required:true,
        isInteger:true
    })
    price:number;
}

export const SaleDetail = SchemaFactory.createForClass(Detail);