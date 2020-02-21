import { Controller, Get, Query, Res, Session } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoEntity } from './pedido.entity';
import { UsuarioService } from '../usuario/usuario.service';


@Controller('pedido')
export class PedidoController{
  constructor(
    private readonly pedidoService: PedidoService,
  ) {
  }
  @Get('comprar')
  async registrarPedido(
    @Res() res,
    @Session() session,
    @Query('total') total: string,
  ) {
    const pedidoEntity = new PedidoEntity();
    if(session.usuario !== undefined){
      pedidoEntity.usuario = session.usuario.userId;
      pedidoEntity.estado = "FINALIZADO";
      pedidoEntity.total = +total;
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var fecha = yyyy + '/' + mm + '/' + dd;
      pedidoEntity.fechaPedido = fecha;
      await this.pedidoService
        .crearUno(
          pedidoEntity,
        );
      res.redirect(
        '/catalogo/guardarDetalle');
    }
    else{
      res.redirect(
        '/catalogo/verCarrito?error=Por favor inicie sesión para realizar un pedido.',
      );
    }
  }

  @Get()
  async lista(
    @Res() res,
    @Session() session,
  ) {
    const consulta = {
      usuario: session.usuario.userId
    };
    const consulta2 = {
      idusuario: session.usuario.userId
    };
    const pedidos = await this.pedidoService.buscar(consulta);
    const usuarios = await this.pedidoService.buscarUsuario(consulta2);
    res.render(
      'usuario/pedido',
      {
        datos: {
          pedidos,
          usuario:usuarios[0]
        },
      },
    );
    }



}
