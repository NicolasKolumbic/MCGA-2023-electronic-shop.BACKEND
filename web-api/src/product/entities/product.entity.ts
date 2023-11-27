import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Category } from "src/category/entities/category.entity";

// Entidades relacionadas con la BASE DE DATOS, cada una representa una COLLECION de la Base MongoDB 
@Schema()
export class Product extends Document{ 

    @Prop({
       isRequired: true,
       minlength: 5,
       type: String
    })
    description: string;

    @Prop({
        isRequired: true,
        type: mongoose.Types.Decimal128
    })
    price: number;

    @Prop({
        isRequired: true,
        isInteger: true
    })
    stock: number;

    @Prop({
        type: mongoose.Types.ObjectId,
        ref: 'Category' 
    })
    category: Category
}

export const ProductSchema = SchemaFactory.createForClass(Product);
