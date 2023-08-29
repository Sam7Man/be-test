import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Contacts')
@Controller('contacts')
export class ContactController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async create(@Body() createContactDto: CreateContactDto) {
    return this.prisma.contact.create({ data: createContactDto });
  }

  @Get()
  async findAll() {
    return this.prisma.contact.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateContactDto: CreateContactDto) {
    return this.prisma.contact.update({
      where: { id },
      data: updateContactDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.contact.delete({ where: { id } });
  }
}
