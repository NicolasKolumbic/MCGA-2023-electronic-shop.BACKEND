import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // configurar un prefijo globalmente para todos los endpoints.
  app.setGlobalPrefix('api/v1');

  // prever que la API reciba datos que no se encuentran en los modelos de datos.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  
  await app.listen(3000);
}
bootstrap();
