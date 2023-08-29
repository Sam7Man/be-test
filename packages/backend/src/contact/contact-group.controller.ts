import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactGroupDto } from './dto/create-contact-group.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Contacts')
@Controller('contact-groups')
export class ContactGroupController {
  constructor(private readonly prisma: PrismaService) {}

  @Post('create')
  async create(@Body() createContactGroupDto: CreateContactGroupDto) {
    return this.prisma.contactGroup.create({ data: createContactGroupDto });
  }

  @Get()
  async findAll() {
    return this.prisma.contactGroup.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.contactGroup.findUnique({ where: { id } });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateContactGroupDto: CreateContactGroupDto) {
    return this.prisma.contactGroup.update({
      where: { id },
      data: updateContactGroupDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.contactGroup.delete({ where: { id } });
  }
}
