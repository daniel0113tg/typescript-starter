import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleEntity } from './detalle.entity';
import { DetalleController } from './detalle.controller';
import { DetalleService } from './detalle.service';

@Module({
  imports: [
    TypeOrmModule
      .forFeature([
          DetalleEntity
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
