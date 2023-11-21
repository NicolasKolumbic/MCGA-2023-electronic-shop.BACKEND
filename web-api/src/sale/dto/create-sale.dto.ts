import { IsNotEmpty, IsNumber, IsArray, IsString } from 'class-validator';

export class CreateSaleDto {
    @IsNotEmpty()
    @IsNumber()
    saleId:number;
    @IsNotEmpty()
    @IsArray()
    detail:SaleDetail[];
    @IsNotEmpty()
    @IsNumber()
    total:number;
}

class SaleDetail{
    @IsString()
    @IsNotEmpty()
    productId: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;
  }