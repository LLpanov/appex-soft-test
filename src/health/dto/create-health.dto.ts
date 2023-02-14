import { ApiProperty } from '@nestjs/swagger';

export class CreateHealthDto {
	@ApiProperty({ example: 86867968, description: 'How much free RAM do you have in bytes? ' })
	public freeMemory: number;
}
