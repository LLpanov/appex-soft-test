import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { HealthController } from './health/health.controller';
import { HealthService } from './health/health.service';

@Module({
	imports: [UserModule, AuthModule],
	controllers: [HealthController],
	providers: [HealthService]
})
export class AppModule {}
