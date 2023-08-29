import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Workspaces')
@Controller('workspaces')
export class WorkspaceController {
  constructor(
    private workspaceService: WorkspaceService,
    private prisma: PrismaService
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createWorkspace: CreateWorkspaceDto) {
    return this.prisma.workspace.create({ data: createWorkspace });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllWorkspaces() {
    return this.workspaceService.getAllWorkspaces();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getWorkspaceById(@Param('id') id: string) {
    return this.workspaceService.getWorkspaceById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateWorkspace(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateWorkspaceDto) {
    return this.workspaceService.updateWorkspace(id, updateWorkspaceDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteWorkspace(@Param('id') id: string) {
    return this.workspaceService.deleteWorkspace(id);
  }
}
