import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { DetalleEntity } from '../detalle/detalle.entity';

@Entity('pedido')
export class PedidoEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id_pedido',
    comment: 'Identificador de la tabla pedido',
  })
  idPedido: number;
  @Index(
    "id_pedido",
    {
    unique: false
  })

  @ManyToOne(
    type => UsuarioEntity,
      usuario => usuario.idUsuario
  )
  usuario: UsuarioEntity;

  @OneToMany(
    type => DetalleEntity,
    detalle => detalle.idDetallePedido
  )
  detalle: DetalleEntity[];

  @Column({
    type: 'date',
    nullable: false,
    name: 'fecha',
    comment: 'Fecha del pedido',
  })
  fechaPedido: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'estado',
    comment: 'Estado del pedido',
  })
  estado: string;


  @Column({
    type: 'double',
    nullable: false,
    name: 'total_pagar',
    comment: 'Total a pagar',
  })
  total: number;
}
