import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioEntity } from '../usuario/usuario.entity';
@Module({
  imports: [
    TypeOrmModule
      .forFeature([
          PedidoEntity,
          UsuarioEntity
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
