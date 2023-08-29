import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Accounts')
@Controller('accounts')
export class AccountController {
  constructor(
    private accountService: AccountService,
    private readonly prisma: PrismaService
  ) {}
  
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createAccount: CreateAccountDto) {
    return this.prisma.contact.create({ data: createAccount });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllAccounts() {
    return this.accountService.getAllAccounts();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getAccountById(@Param('id') id: string) {
    return this.accountService.getAccountById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateAccount(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.updateAccount(id, updateAccountDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteAccount(@Param('id') id: string) {
    return this.accountService.deleteAccount(id);
  }
}
