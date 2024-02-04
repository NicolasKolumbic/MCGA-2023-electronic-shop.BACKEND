import { Type } from "class-transformer";
import { IsString, MinLength, IsInt, IsMongoId, IsJSON, IsNumber, IsBase64 } from "class-validator";
import { ProductDetail } from "src/models/product-detail";

export class CreateProductDto {

    @IsString()
    @MinLength(5)
    readonly description: string;

   @IsNumber({
    maxDecimalPlaces: 2
   })
    readonly price: number;

    @IsInt()
    @Type(() => Number)
    readonly stock: number;

    @IsMongoId()
    readonly categoryId: string;

    @IsJSON()
    readonly features: ProductDetail;

    @IsBase64()
    readonly image: any
}
