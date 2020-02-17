import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
@Module({
  imports: [
    TypeOrmModule
      .forFeature([
          PedidoEntity
        ],
        'default'
      ),
  ],
  controllers: [
    PedidoController,
  ],
  providers: [
    PedidoService,
  ],
  exports: [
    PedidoService,
  ]
})
export class PedidoModule{
}
