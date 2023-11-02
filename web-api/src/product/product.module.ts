import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

// todos los artefactos de un modulo deben ser incluidos en un MODULO
@Module({
  // este creo que es descriptivo
  controllers: [ProductController],
  // en "providers incluimos todos los SERVICIOS que van ser incluidos en este MODULO en particular"
  providers: [ProductService],
})
export class ProductModule {}
