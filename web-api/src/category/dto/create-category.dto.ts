import { IsString, IsJSON } from "class-validator";
import { ProductDetail } from "src/models/product-detail";

export class CreateCategoryDto {
    @IsString()
    readonly description: string;
    @IsJSON()
    readonly characteristics: ProductDetail
}
