import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './producto.entity';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { DetalleEntity } from '../detalle/detalle.entity';
import { PedidoEntity } from '../pedido/pedido.entity';
@Module({
  imports: [
    TypeOrmModule
      .forFeature([
          DetalleEntity,
          ProductoEntity,
          PedidoEntity,
        ],
        'default'
      ),
  ],
  controllers: [
    ProductoController,
  ],
  providers: [
    ProductoService,
  ],
  exports: [
    ProductoService,
  ]
})
export class ProductoModule{
}
