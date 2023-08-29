import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ContactModule } from '../contact/contact.module';
import { WorkspaceModule } from '../workspace/workspace.module';
import { AccountModule } from '../account/account.module';
import { ApiTokenModule } from '../api-token/api-token.module';


@Module({
  imports: [UserModule, AuthModule, ContactModule, WorkspaceModule, AccountModule, ApiTokenModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}



