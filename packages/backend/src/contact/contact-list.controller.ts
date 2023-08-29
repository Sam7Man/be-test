import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Contacts')
@Controller('contact-lists')
export class ContactListController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.contactList.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.contactList.findUnique({ where: { id } });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.contactList.delete({ where: { id } });
  }
}
