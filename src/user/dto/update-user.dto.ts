import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
	public name: string;
	public password: string;
	@ApiProperty({ example: 'google@gmail.com', description: 'unique ' })
	public email: string;
}
