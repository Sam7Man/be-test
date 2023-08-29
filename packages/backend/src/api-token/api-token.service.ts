import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApiTokenDto } from './dto/create-api-token.dto';
import { UpdateApiTokenDto } from './dto/update-api-token.dto';

@Injectable()
export class ApiTokenService {
  constructor(private prisma: PrismaService) { }

  async createApiToken(data: CreateApiTokenDto) {
    return this.prisma.apiToken.create({ data });
  }

  async getAllApiTokens() {
    return this.prisma.apiToken.findMany();
  }

  async getApiTokenById(id: string) {
    return this.prisma.apiToken.findUnique({ where: { id } });
  }

  async updateApiToken(id: string, data: UpdateApiTokenDto) {
    return this.prisma.apiToken.update({ where: { id }, data });
  }

  async deleteApiToken(id: string) {
    return this.prisma.apiToken.delete({ where: { id } });
  }
}
