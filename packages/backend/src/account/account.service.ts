import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) { }

  async createAccount(data: CreateAccountDto) {
    return this.prisma.account.create({ data });
  }

  async getAllAccounts() {
    return this.prisma.account.findMany();
  }

  async getAccountById(id: string) {
    return this.prisma.account.findUnique({ where: { id } });
  }

  async updateAccount(id: string, data: UpdateAccountDto) {
    return this.prisma.account.update({ where: { id }, data });
  }

  async deleteAccount(id: string) {
    return this.prisma.account.delete({ where: { id } });
  }
}
