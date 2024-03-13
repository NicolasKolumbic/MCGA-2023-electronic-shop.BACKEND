import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sale/sale.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './firebase/services/auth/auth.interceptor';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nicolaskolumbic:universidad2023@clusteruniversidad.sxtgdsz.mongodb.net/electronic-shop'),
    ConfigModule.forRoot({ cache: true }),
    CategoryModule,
    ProductModule,
    SaleModule,
    FirebaseModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor
    }
  ]
})
export class AppModule {}
