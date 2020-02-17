import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PedidoEntity } from '../pedido/pedido.entity';
import { ProductoEntity } from '../producto/producto.entity';

@Entity('categoria')
export class CategoriaEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    unsigned: true,
    name: 'id_categoria',
    comment: 'Identificador de la tabla categoria',
  })
  idCategoria: number;
  @Index({
    unique: false
  })
  @Column({
    type: 'varchar',
    nullable: true,
    name: 'nombre_categoria',
    comment: 'Nombre de la categoria',
  })
  nombreCategoria: string;

  @OneToMany(
    type => ProductoEntity,
    producto => producto.idProducto
  )
  productos: ProductoEntity[];
}
