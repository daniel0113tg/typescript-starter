import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PedidoEntity } from '../pedido/pedido.entity';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id_usuario',
    comment: 'Identificador de la tabla usuario',
  })
  idUsuario: number;

  @Index({
    unique: false
  })

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'rol_usuario',
    comment: 'Rol de usuario',
  })
  rolUsuario: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'nombre_usuario',
    comment: 'Nombre del usuario',
  })
  nombreUsuario: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'apellido_usuario',
    comment: 'Apellido de usuario',
  })
  apellidoUsuario: string;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: true,
    name: 'cedula_usuario',
    comment: 'Cedula de la tabla usuario',
  })
  cedulaUsuario: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'email',
    unique: true,
    comment: 'Correo de la tabla usuario',
  })
  correo: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'password',
    comment: 'Contrasena de la tabla usuario',
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'direccion',
    comment: 'Direccion de la tabla usuario',
  })
  direccion: string

  @OneToMany(
    type => PedidoEntity,
    pedido => pedido.usuario
  )
  pedidos: PedidoEntity[];


}
