import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {CustomLoggerService, HttpExceptionFilter, initSwagger} from '@hanwha-blockchain/hc-core-hchain-framework-js';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { CustomConfigService } from './custom-config.service';

const logger: CustomLoggerService = new CustomLoggerService();
let app: INestApplication;

async function bootstrap() {
  // setting express application server config
  const appOptions = {
    cors: true,
    bodyParser: true,
    logger: logger,
  };
  app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix(app.get(CustomConfigService).app.routePrefix);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  // setting swagger
  // @ts-ignore
  await initSwagger(app, app.get(CustomConfigService));
  // starts application
  await app.listen(app.get(CustomConfigService).app.port);
}

bootstrap()
    .then(_ => {
      logger.info(`Voting System server listening at ${app.get(CustomConfigService).app.port}`);
    })
    .catch(error => logger.error('Application is crashed: ' + error)
    );
