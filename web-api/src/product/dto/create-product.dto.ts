import { Type } from "class-transformer";
import { IsString, MinLength, IsDecimal, IsInt, IsMongoId, IsJSON } from "class-validator";
import { ProductDetail } from "src/models/product-detail";

export class CreateProductDto {

    @IsString()
    @MinLength(5)
    readonly description: string;

    @IsDecimal()
    readonly price: number;

    @IsInt()
    @Type(() => Number)
    readonly stock: number;

    @IsMongoId()
    readonly categoryId: string;

    @IsJSON()
    readonly features: ProductDetail;
}
