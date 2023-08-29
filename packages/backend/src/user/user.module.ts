import { Module, forwardRef  } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtService],
  exports: [UserService],
})
export class UserModule {}
