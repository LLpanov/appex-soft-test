import * as os from 'os';
import { Injectable } from '@nestjs/common';

import { CreateHealthDto } from './dto/create-health.dto';

@Injectable()
export class HealthService {
	getFreeMemory(): CreateHealthDto {
		return { freeMemory: os.freemem() };
	}
}
