import { Injectable } from '@nestjs/common';

import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private prismaService: PrismaService) {}

	async updateUser(data: Prisma.UserUpdateInput, userId: string): Promise<User> {
		return this.prismaService.user.update({
			where: { id: Number(userId) },
			data: {
				name: data.name,
				password: data.password,
				email: data.email
			}
		});
	}
}
