import { Module } from '@nestjs/common';
import { ApiTokenService } from './api-token.service';
import { ApiTokenController } from './api-token.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ApiTokenController],
  providers: [ApiTokenService, PrismaService],
})
export class ApiTokenModule {}
