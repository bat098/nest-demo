import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory: (errors) => {
        const formattedErrors = errors.reduce((acc, err) => {
          acc[err.property] = {
            message: Object.values(err.constraints)[0],
          };
          return acc;
        }, {});

        const response = {
          message: formattedErrors,
          statusCode: 400,
          error: 'Bad Request',
        };

        return new UnprocessableEntityException(response);
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
