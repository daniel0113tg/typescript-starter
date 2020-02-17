import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PedidoEntity } from '../pedido/pedido.entity';
import { ProductoEntity } from '../producto/producto.entity';
@Entity('detalle_pedido')

export class DetalleEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id_detalle_pedido',
    comment: 'Identificador de la tabla detalle_pedido',
  })
  idDetallePedido: number;

  @Index(
    "id_detalle_pedido",
    {
      unique: false
    })

  @Column({
    type: 'int',
    unsigned: true,
    name: 'cantidad',
    comment: 'Cantidad de productos',
  })
  cantidad: number;

  @Column({
    type: 'double',
    unsigned: true,
    name: 'subtotal',
    comment: 'Subtotal Detalle (precio x cantidad)',
  })
  subtotal: number;

  @ManyToOne(
    type => PedidoEntity,
    pedido => pedido.idPedido
  )
  pedido: PedidoEntity;

  @ManyToOne(
    type => ProductoEntity,
    producto => producto.idProducto
  )
  producto: ProductoEntity;



}
