import { IsNotEmpty, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { SaleDetail } from './create-detail.dto';
import { Type } from 'class-transformer';

export class CreateSaleDto {
    @IsNotEmpty()
    @IsNumber()
    saleId:number;
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => SaleDetail)
    detail:SaleDetail[];
    @IsNotEmpty()
    @IsNumber()
    total:number;
}