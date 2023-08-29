import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';


@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async createSession(data: CreateSessionDto) {
    return this.prisma.session.create({ data });
  }

  async getAllSessions() {
    return this.prisma.session.findMany();
  }

  async getSessionById(id: string) {
    return this.prisma.session.findUnique({ where: { id } });
  }

  async updateSession(id: string, data: UpdateSessionDto) {
    return this.prisma.session.update({ where: { id }, data });
  }

  async deleteSession(id: string) {
    return this.prisma.session.delete({ where: { id } });
  }
}
