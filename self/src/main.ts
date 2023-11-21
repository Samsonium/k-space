import { NestFactory } from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const swaggerConfig = new DocumentBuilder()
      .setTitle('K-Space API — Self')
      .setDescription('API сервиса авторизации и аутентификации')
      .setVersion('1.0.0')
      .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, swaggerDoc);

  await app.listen(7000);
}
bootstrap().then();
