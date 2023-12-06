import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import mongoose, { Document, ObjectId, Types } from "mongoose";
import { Category } from "src/category/entities/category.entity";
import { CreateProductDto } from "../dto/create-product.dto";
import { ProductDetail } from "src/models/product-detail";

// Entidades relacionadas con la BASE DE DATOS, cada una representa una COLLECION de la Base MongoDB 
@Schema()
export class Product extends Document {

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
        isInteger: true,
        type: Number
    })
    stock: number;

    @Prop({
        type: Category,
        ref: 'Category'
    })
    category: Category

    @Prop({
        isRequired: true,
        type: Object
    })
    features: ProductDetail;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
