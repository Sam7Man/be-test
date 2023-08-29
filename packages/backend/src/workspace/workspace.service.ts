import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';

@Injectable()
export class WorkspaceService {
  constructor(private prisma: PrismaService) { }

  async createWorkspace(data: CreateWorkspaceDto) {
    return this.prisma.workspace.create({ data });
  }

  async getAllWorkspaces() {
    return this.prisma.workspace.findMany();
  }

  async getWorkspaceById(id: string) {
    return this.prisma.workspace.findUnique({ where: { id } });
  }

  async updateWorkspace(id: string, data: UpdateWorkspaceDto) {
    return this.prisma.workspace.update({ where: { id }, data });
  }

  async deleteWorkspace(id: string) {
    return this.prisma.workspace.delete({ where: { id } });
  }
}
