import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class SaleDetail{
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