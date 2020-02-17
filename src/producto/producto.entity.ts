import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoriaEntity } from '../categoria/categoria.entity';
import { PedidoEntity } from '../pedido/pedido.entity';
import { DetalleEntity } from '../detalle/detalle.entity';

@Entity('producto')
export class ProductoEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id_producto',
    comment: 'Identificador de la tabla producto',
  })
  idProducto: number;
  @Index({
    unique: false
  })
  @Column({
    type: 'varchar',
    nullable: false,
    name: 'nombre_producto',
    comment: 'Nombre del producto',
  })
  nombreProducto: string;
  @Column({
    type: 'varchar',
    nullable: false,
    name: 'tipo_producto',
    comment: 'Tipo de producto',
  })
  tipoProducto: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'descripcion_producto',
    comment: 'Descripcion de producto',
  })
  descProducto: string;

  @Column({
    type: 'int',
    unsigned: true,
    name: 'unidad_producto',
    comment: 'Unidad de existencia del producto',
  })
  unidadProducto: number;

  @Column({
    type: 'double',
    nullable: false,
    name: 'precio_producto',
    comment: 'Precio del producto',
  })
  precioProducto: number;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'imagen_producto',
    comment: 'Imagen de producto',
  })
  imgProducto: string;

  @ManyToOne(
    type => CategoriaEntity,
    categoria => categoria.idCategoria
  )
  categoria: CategoriaEntity;


  @OneToMany(
    type => DetalleEntity,
    detalle => detalle.idDetallePedido
  )
  detalle: DetalleEntity[];



}
