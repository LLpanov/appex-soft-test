import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@ApiProperty({ example: 'Anna', description: 'user name' })
	public name: string;
	@ApiProperty({ example: '241434345', description: 'user password' })
	public password: string;
	@ApiProperty({ example: 'google@gmail.com', description: 'user unique @email ' })
	public email: string;
}
