import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleEntity } from './detalle.entity';
import { PedidoEntity } from '../pedido/pedido.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ProductoEntity } from '../producto/producto.entity';


@Injectable()
export class DetalleService{
  constructor(
    @InjectRepository(DetalleEntity)
    private _repositorioDetalle: Repository<DetalleEntity>,
    @InjectRepository(UsuarioEntity)
    private _repositorioUsuario: Repository<UsuarioEntity>,
    @InjectRepository(UsuarioEntity)
    private _repositorioProducto: Repository<ProductoEntity>
  ) {
  }
  async buscar(
    where: any = {},
    skip: number = 0,
    order: any = {}
  ): Promise<DetalleEntity[]> {
    return this._repositorioDetalle
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
  async buscarProducto(
    where: string
  ): Promise<DetalleEntity[]> {
    return this._repositorioDetalle.createQueryBuilder("detalle")
      .innerJoinAndSelect("detalle.producto","producto")
      .where( "detalle.pedido = :pedido", { pedido: where }).getMany();


  }
}
