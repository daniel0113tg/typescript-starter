import { IsEmail, IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength } from 'class-validator';

export class UsuarioCreateDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  rolUsuario: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  nombreUsuario: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  apellidoUusuario: string;

  @IsNotEmpty()
  @IsNumberString()
  @MinLength(10)
  @MaxLength(10)
  cedulaUsuario: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  direccion: string;

}
