import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from "cookie-parser";
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // configurar un prefijo globalmente para todos los endpoints.
  app.setGlobalPrefix('api/v1');

  app.use(
    session({
      secret: 'test-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(cookieParser());

  // prever que la API reciba datos que no se encuentran en los modelos de datos.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }))

  app.enableCors({
    credentials: true,
    origin: [
      'http://localhost:3000'
    ]
  });
  
  // la web api esta escuchando en el puerto 3000
  // De esta forma, podemos utilizar POSTMAN para enviar peticiones a los diferentes ENDPOINT
  await app.listen(3005);
}
bootstrap();
