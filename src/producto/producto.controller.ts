import { Controller } from '@nestjs/common';
import { ProductoService } from './producto.service';

@Controller('categoria')
export class ProductoController{
  constructor(
    private readonly productoService: ProductoService,
  ) {
  }

}
