import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@ApiOperation({ summary: 'Create user with hash password ' })
	@ApiOkResponse({
		status: 201,
		schema: {
			example: {
				name: 'Anna',
				password: 'U2FsdGVkX18fKyo38VLOPke7U8lkjosKA54+0urddPc=',
				email: '@google.com'
			}
		}
	})
	@HttpCode(HttpStatus.CREATED)
	@Post('/sing-up')
	registration(@Body() userDto: CreateUserDto) {
		return this.authService.registration(userDto);
	}
}
