import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEntity } from './categoria/categoria.entity';
import { CategoriaService } from './categoria/categoria.service';
import { PedidoModule } from './pedido/pedido.module';
import { PedidoEntity } from './pedido/pedido.entity';
import { PedidoService } from './pedido/pedido.service';
import { ProductoModule } from './producto/producto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProductoEntity } from './producto/producto.entity';
import { UsuarioEntity } from './usuario/usuario.entity';
import { ProductoService } from './producto/producto.service';
import { UsuarioService } from './usuario/usuario.service';
import { DetalleEntity } from './detalle/detalle.entity';
import { DetalleService } from './detalle/detalle.service';
import { DetalleModule } from './detalle/detalle.module';

@Module({
  imports: [
    CategoriaModule,
    PedidoModule,
    ProductoModule,
    UsuarioModule,
    DetalleModule,
    TypeOrmModule.forRoot(
      {
        name: 'default',
        type: 'mysql',
        host: 'localhost',
        port: 32769,
        username: 'admin',
        password: '1234',
        database: 'mascota',
        //dropSchema: true,
        entities: [
          CategoriaEntity,
          PedidoEntity,
          ProductoEntity,
          UsuarioEntity,
          DetalleEntity,
        ],
        synchronize: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private _categoriaService: CategoriaService,
    private _pedidoService: PedidoService,
    private _productoervice: ProductoService,
    private _usuarioService: UsuarioService,
    private _detalleService: DetalleService,
  ) {
  }
}
