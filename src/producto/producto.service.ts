import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from '../pedido/pedido.entity';
import { ProductoEntity } from './producto.entity';

@Injectable()
export class ProductoService{
  constructor(
    @InjectRepository(ProductoEntity)
    private _repositorioProducto: Repository<ProductoEntity>
  ) {
  }
}
