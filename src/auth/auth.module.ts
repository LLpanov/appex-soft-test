import { forwardRef, Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { UserModule } from '../user/user.module';

@Module({
	imports: [forwardRef(() => UserModule)],
	controllers: [AuthController],
	providers: [AuthService, PrismaService]
})
export class AuthModule {}
