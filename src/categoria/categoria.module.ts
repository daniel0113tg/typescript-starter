import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { CategoriaEntity } from './categoria.entity';
@Module({
  imports: [
    TypeOrmModule
      .forFeature([
        CategoriaEntity
      ],
        'default'
        ),
  ],
  controllers: [
    CategoriaController,
  ],
  providers: [
    CategoriaService,
  ],
  exports: [
    CategoriaService,
  ]
})
export class CategoriaModule{
}
