import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';

@ApiTags('Health')
@Controller('health')
export class HealthController {
	constructor(private readonly healthService: HealthService) {}

	@ApiOkResponse({
		status: 200,
		schema: {
			example: {
				freeMemory: 5788532736
			}
		}
	})
	@HttpCode(HttpStatus.OK)
	@Get()
	getHealth(): CreateHealthDto {
		return this.healthService.getFreeMemory();
	}
}
