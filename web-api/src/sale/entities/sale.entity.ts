import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Detail, SaleDetail } from "./detail.entity";

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
        type: [SaleDetail]
    })
    detail:Detail[];
    @Prop({
        required:true,
        isInteger:true
    })
    total:number;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);