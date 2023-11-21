import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nicolaskolumbic:universidad2023@clusteruniversidad.sxtgdsz.mongodb.net/electronic-shop'),
    CategoryModule,
    ProductModule,
    SaleModule
  ],
  providers: []
})
export class AppModule {}
