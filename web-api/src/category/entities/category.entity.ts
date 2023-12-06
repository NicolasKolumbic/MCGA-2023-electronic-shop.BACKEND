import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ProductDetail } from "src/models/product-detail";


@Schema()
export class Category extends Document{

    @Prop({
        type: String,
        isRequired: true,
        minlength: 5
    })
    description: string;

    @Prop({
      isRequired: true ,
      type: Object
    })
    characteristics: ProductDetail
}

export const CategorySchema = SchemaFactory.createForClass(Category);