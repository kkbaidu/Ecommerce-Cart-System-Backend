import { IsArray, IsNumber, IsString } from 'class-validator';
import { Product } from 'src/schemas/products.schema';

export class CreateCartDto {
  @IsString()
  userId: string;

  @IsArray()
  items: Product[];

  @IsNumber()
  total: number;
}
