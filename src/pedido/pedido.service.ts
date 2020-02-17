import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoEntity } from './pedido.entity';

@Injectable()
export class PedidoService{
  constructor(
    @InjectRepository(PedidoEntity)
    private _repositorioPedido: Repository<PedidoEntity>
  ) {
  }
}
