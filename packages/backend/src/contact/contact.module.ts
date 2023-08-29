import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactListController } from './contact-list.controller';
import { ContactGroupController } from './contact-group.controller';
import { ContactService } from './contact.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ContactController, ContactListController, ContactGroupController],
  providers: [ContactService, PrismaService],
})
export class ContactModule {}
