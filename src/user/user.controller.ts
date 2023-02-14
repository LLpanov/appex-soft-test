import { Body, Controller, HttpCode, HttpStatus, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiOperation({ summary: 'update user by id' })
	@HttpCode(HttpStatus.OK)
	@Patch(':id')
	update(@Param('id') id: string, @Body() userDto: UpdateUserDto) {
		return this.userService.updateUser(userDto, id);
	}
}
