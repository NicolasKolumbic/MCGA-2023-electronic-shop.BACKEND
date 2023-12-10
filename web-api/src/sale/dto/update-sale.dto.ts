import { IsOptional, IsNumber ,IsArray, ValidateNested} from 'class-validator';
import { SaleDetail } from './update-detail.dto';
import { Type } from 'class-transformer';

export class UpdateSaleDto  {
    @IsOptional()
    @IsNumber()
    saleId?:Number;

    @IsArray()
    @ValidateNested({ each: true})
    @Type(() => SaleDetail)
    detail?:SaleDetail[];

    @IsOptional()
    @IsNumber()
    total?:Number;
}