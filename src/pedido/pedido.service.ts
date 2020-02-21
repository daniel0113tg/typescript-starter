import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from './pedido.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ProductoEntity } from '../producto/producto.entity';

@Injectable()
export class PedidoService{
  constructor(
    @InjectRepository(PedidoEntity)
    private _repositorioPedido: Repository<PedidoEntity>,
    @InjectRepository(UsuarioEntity)
    private _repositorioUsuario: Repository<UsuarioEntity>
  ) {
  }
  crearUno(pedido: PedidoEntity) {
    return this._repositorioPedido
      .save(pedido);
  }
  async buscar(
    where: any = {},
    skip: number = 0,
    order: any = {}
  ): Promise<PedidoEntity[]> {
    return this._repositorioPedido
      .find({
        where: where,
        skip: skip,
        order: order,
      });


  }
  async buscarUsuario(
    where: any = {},
    skip: number = 0,
    order: any = {}
  ): Promise<UsuarioEntity[]> {
    return this._repositorioUsuario
      .find({
        where: where,
        skip: skip,
        order: order,
      });


  }

}
