import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTokenService } from './api-token.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateApiTokenDto } from './dto/create-api-token.dto';
import { UpdateApiTokenDto } from './dto/update-api-token.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('ApiToken')
@Controller('apiTokens')
export class ApiTokenController {
    constructor(private apiTokenService: ApiTokenService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllApiTokens() {
        return this.apiTokenService.getAllApiTokens();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getApiTokenById(@Param('id') id: string) {
        return this.apiTokenService.getApiTokenById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async updateApiToken(@Param('id') id: string, @Body() updateApiTokenDto: UpdateApiTokenDto) {
        return this.apiTokenService.updateApiToken(id, updateApiTokenDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteApiToken(@Param('id') id: string) {
        return this.apiTokenService.deleteApiToken(id);
    }
}
