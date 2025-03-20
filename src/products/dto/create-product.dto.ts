import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNumber()
  price: number;

  @IsString()
  @IsNotEmpty()
  image: string;
}
