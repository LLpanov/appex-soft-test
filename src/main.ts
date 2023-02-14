import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

dotenv.config();

async function bootstrap() {
	const PORT = process.env.PORT_APP || 5600;
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder().setTitle('AppexSoft').setDescription('RestApi').setVersion('1.0.0').addTag('LP').build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('/docs', app, document);
	await app.listen(PORT, () => console.log(`Server has been started on port = ${PORT}`));
}

bootstrap();
