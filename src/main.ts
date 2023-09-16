import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { create } from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  const templateExt = '.html';
  const hbs = create({
    extname: templateExt,
  });

  app.engine(templateExt, hbs.engine);
  app.setViewEngine(templateExt);

  await app.listen(3000);
}
bootstrap();
