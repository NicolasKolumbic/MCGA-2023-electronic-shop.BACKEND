import { IsOptional, IsNumber } from 'class-validator';

export class UpdateSaleDto  {
    @IsOptional()
    @IsNumber()
    saleId?:Number;

    @IsOptional()
    @IsNumber()
    detail?:SaleDetail[];

    @IsOptional()
    @IsNumber()
    total?:Number;
}

class SaleDetail {
    @IsNumber()
    @IsOptional()
    productId?: number;

    @IsNumber()
    @IsOptional()
    quantity?: number;

    @IsNumber()
    @IsOptional()
    price?: number;
  }