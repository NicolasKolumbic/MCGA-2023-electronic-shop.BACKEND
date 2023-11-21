import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema()
export class Sale extends Document{
    @Prop({
        type:Number,
        isRequired:true,
        unique:true
    })
    saleId:number;
    @Prop({
        required:true,
        type:mongoose.Types.Array
    })
    detail:SaleDetail[];
    @Prop({
        required:true,
        isInteger:true
    })
    total:number;
}

class SaleDetail{
    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    })
    productId:string;
    @Prop({
        required:true,
        isInteger:true
    })
    quantity:number;
    @Prop({
        required:true,
    })
    price:number;
}

export const SaleSchema = SchemaFactory.createForClass(Sale)