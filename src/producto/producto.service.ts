import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from '../pedido/pedido.entity';
import { ProductoEntity } from './producto.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { DetalleEntity } from '../detalle/detalle.entity';

@Injectable()
export class ProductoService{
  constructor(
    @InjectRepository(ProductoEntity)
    private _repositorioProducto: Repository<ProductoEntity>,
    @InjectRepository(DetalleEntity)
    private _repositorioDetalle: Repository<DetalleEntity>,
    @InjectRepository(PedidoEntity)
    private _repositorioPedido: Repository<PedidoEntity>
  ) {
  }
  guardarDetalle(detalle: DetalleEntity) {
    return this._repositorioDetalle
      .save(detalle);
  }
  buscar(
    where: any = {},
    skip: number = 0,
    order: any = {}
  ): Promise<ProductoEntity[]> {
    return this._repositorioProducto
      .find({
        where: where,
        skip: skip,
        order: order,
      });
  }
  buscarPedido(
    where: any = {},
    skip: number = 0,
    take: number = 1,
    order: any = {
      idPedido: 'DESC',
    }
  ): Promise<PedidoEntity[]> {
    return this._repositorioPedido
      .find({
        where: where,
        skip: skip,
        take: take,
        order: order,
      });
  }


}
