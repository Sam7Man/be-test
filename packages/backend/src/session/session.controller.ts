import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SessionService } from './session.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Sessions')
@Controller('sessions')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllSessions() {
    return this.sessionService.getAllSessions();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getSessionById(@Param('id') id: string) {
    return this.sessionService.getSessionById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateSession(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.updateSession(id, updateSessionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteSession(@Param('id') id: string) {
    return this.sessionService.deleteSession(id);
  }
}
