import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { AES } from 'crypto-js';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
	constructor(private prismaService: PrismaService) {}

	async registration(data: Prisma.UserCreateInput): Promise<User> {
		try {
			const hashPassword = await argon2.hash(data.password);
			const encryptedPassword = AES.encrypt(data.password, hashPassword).toString();
			return this.prismaService.user.create({
				data: {
					...data,
					password: encryptedPassword
				}
			});
		} catch (error: any) {
			throw new Error(`while hashing or encrypting the password ${error.message}`);
		}
	}
}
