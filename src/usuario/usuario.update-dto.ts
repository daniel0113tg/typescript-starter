import { IsEmail, IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength } from 'class-validator';

export class UsuarioUpdateDto {

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
