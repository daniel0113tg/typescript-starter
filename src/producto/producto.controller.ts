import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Like } from 'typeorm';
import { ProductoEntity } from './producto.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { DetalleEntity } from '../detalle/detalle.entity';
@Controller('catalogo')
export class ProductoController{
  // @ts-ignore
  declare productoEntities:  ProductoEntity[];
  constructor(
    private readonly productoService: ProductoService,
  ) {
    this.productoEntities = [];
  }
  @Get('categoria/:mascota/:categoria')
  async categoria(
    @Param('categoria') categoria: string,
    @Param('mascota') mascota: string,
    @Res() res,
  ) {
    let consulta;
    if(mascota === "TODO"){
      consulta = {
        tipoProducto: categoria,
      };
    }
    else{
      consulta = {
        tipoProducto: categoria,
        categoria: mascota,
      };
    }

    const productos = await this.productoService.buscar(consulta);
    console.log(productos.length);
    res.render('productos/productos',          {
      datos: {
        productos,
        mascota,
      },
    },);
  }
  @Get('mascota/:mascota')
  async mascota(
    @Param('mascota') mascota: string,
    @Res() res,
  ) {
    const consulta = {
      categoria: mascota,
    };
    const productos = await this.productoService.buscar(consulta);
    res.render('productos/productos',          {
      datos: {
        productos,
        mascota
      },
    },);
  }

  @Post()
  async busquedaPrincipal(
    @Body('busqueda') busqueda: string,
    @Res() res,
  ) {
    let consulta;
    console.log(busqueda);
    if(busqueda){
      consulta = {
        nombreProducto: Like(busqueda+'%'),
      };
    }
    else{
      consulta = {
      };
    }
    const mascota = "TODO";
    const productos = await this.productoService.buscar(consulta);
    console.log(productos.length);
    res.render('productos/productos',          {
      datos: {
        productos,
        mascota
      },
    },);
  }

  @Get('agregar/:idProducto')
  async agregarAlCarrito(
    @Param('idProducto') idproducto: string,
    @Res() res,
  ) {
    const consulta = {
      idProducto: idproducto,
    };
    const producto = await this.productoService.buscar(consulta);
    this.productoEntities.push(producto[0]);
  }

  @Get('quitar/:idProducto')
  async quitarDelCarrito(
    @Param('idProducto') idproducto: string,
    @Res() res,
  ) {
    console.log(idproducto);
    const consulta = {
      idProducto: idproducto,
    };
    const producto = await this.productoService.buscar(consulta);
    console.log(producto[0].idProducto);
    let index;
    for (var _i = 0; _i < this.productoEntities.length; _i++) {
      if (this.productoEntities[_i].idProducto === producto[0].idProducto){
        index = _i;
      }
    }
    console.log(index);
    this.productoEntities.splice(index,1);
    res.redirect(
      '/catalogo/verCarrito',
    );
  }

  @Get('verCarrito')
  async verCarrito(
    @Res() res,
    @Query('error') error: string,
  ) {
    const carrito_total = this.productoEntities;
    res.render('productos/carrito',          {
      datos: {
        carrito_total,
        error,
      },
    },);
  }
  @Get('guardarDetalle')
  async guardarDetalle(
    @Res() res,
  ) {
    const pedido = await this.productoService.buscarPedido();
    let producto;
    for (var _i = 0; _i < this.productoEntities.length; _i++) {
        producto = new ProductoEntity();
        const detalle = new DetalleEntity();
        producto.idProducto = this.productoEntities[_i].idProducto;
      producto.nombreProducto = this.productoEntities[_i].nombreProducto;
      producto.tipoProducto = this.productoEntities[_i].tipoProducto;
      producto.descProducto = this.productoEntities[_i].descProducto;
      producto.unidadProducto = this.productoEntities[_i].unidadProducto;
      producto.precioProducto= this.productoEntities[_i].precioProducto;
      producto.imgProducto = this.productoEntities[_i].imgProducto;
      producto.categoria = this.productoEntities[_i].categoria;
        detalle.pedido = pedido[0];
        detalle.cantidad = 1;
        detalle.producto = producto;
      console.log("precio"+this.productoEntities[_i]);
        detalle.subtotal = this.productoEntities[_i].precioProducto*detalle.cantidad;
        this.productoService.guardarDetalle(detalle);
      }
    this.productoEntities = [];
    res.redirect('/pedido');
  }


}
