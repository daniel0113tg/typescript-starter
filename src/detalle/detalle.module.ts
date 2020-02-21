import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleEntity } from './detalle.entity';
import { DetalleController } from './detalle.controller';
import { DetalleService } from './detalle.service';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ProductoEntity } from '../producto/producto.entity';

@Module({
  imports: [
    TypeOrmModule
      .forFeature([
          DetalleEntity,
          UsuarioEntity,
          ProductoEntity,
        ],
        'default'
      ),
  ],
  controllers: [
    DetalleController,
  ],
  providers: [
    DetalleService,
  ],
  exports: [
    DetalleService,
  ]
})
export class DetalleModule{
}
