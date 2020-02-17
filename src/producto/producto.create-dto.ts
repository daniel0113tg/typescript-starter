import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString, MaxLength, MinLength } from 'class-validator';

export class ProductoCreateDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  nombreProducto: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  tipoProducto: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  descProducto: string;

  @IsNotEmpty()
  @IsNumber()
  unidadProducto: number;

  @IsNotEmpty()
  @IsNumber()
  precioProducto: number;

  @IsNotEmpty()
  imgProducto: string;
}
