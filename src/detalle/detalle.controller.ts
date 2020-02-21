import { Controller, Get, Param, Res, Session } from '@nestjs/common';
import { DetalleService } from './detalle.service';

@Controller('detalle')
export class DetalleController {
  constructor(
    private readonly detalleService: DetalleService,
  ) {
  }

  @Get(':idPedido')
  async agregarAlCarrito(
    @Param('idPedido') idPedido: string,
    @Res() res,
    @Session() session,
  ) {
    const consulta = {
      pedido: idPedido,
    };
    const consulta2 = {
      idUsuario: session.usuario.userId,
    };

    const usuario = await this.detalleService.buscarUsuario(consulta2);
    const consulta3 = {
      idProducto: '',
    };
    const detalle = await this.detalleService.buscarProducto(idPedido);
    res.render('usuario/detalle', {
      datos: {
        detalle,
        usuario,
      },
    },);

  }
}
