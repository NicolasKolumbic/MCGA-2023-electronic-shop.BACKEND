import { IsOptional, IsNumber, IsString} from 'class-validator';

export class SaleDetail {
  @IsString()
  @IsOptional()
  productId?: number;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsNumber()
  @IsOptional()
  price?: number;
}