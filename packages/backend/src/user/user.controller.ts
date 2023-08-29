// import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import { UserService } from './user.service';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

// @ApiBearerAuth()
// @ApiTags('Users')
// @Controller('users')
// export class UserController {
//   constructor(private userService: UserService) { }

//   @UseGuards(JwtAuthGuard)
//   @Get()
//   async getAllUsers() {
//     return this.userService.getAllUsers();
//   }

//   @UseGuards(JwtAuthGuard)
//   @Get(':id')
//   async getUserById(@Param('id') id: string) {
//     return this.userService.getUserById(id);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Put(':id')
//   async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.userService.updateUser(id, updateUserDto);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Delete(':id')
//   async deleteUser(@Param('id') id: string) {
//     return this.userService.deleteUser(id);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create')
  @ApiCreatedResponse({ type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto) {
    // Use await directly without creating a new UserEntity instance
    return await this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    // No need to map to UserEntity here
    return users;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  async getUserById(@Param('id', ParseIntPipe) id: string) {
    return await this.userService.getUserById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  async updateUser(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  async deleteUser(@Param('id', ParseIntPipe) id: string) {
    return await this.userService.deleteUser(id);
  }
}