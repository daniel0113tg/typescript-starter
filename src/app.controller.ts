import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('inicio')
  inicio(
    @Query('mensaje') mensaje: string,
    @Res() res,
  ) {
    res.render('principal/principal',          {
      datos: {
        mensaje,
      },
    },);

  }

}
