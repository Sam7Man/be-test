import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Contact } from './entities/contact.entity';
import { ContactList } from './entities/contact-list.entity';
import { ContactGroup } from '@prisma/client';


@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create(contact: Contact): Promise<Contact> {
    return this.prisma.contact.create({ data: contact });
  }

  async findAll(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  async findOne(id: string): Promise<Contact | null> {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  async update(id: string, contact: Contact): Promise<Contact | null> {
    return this.prisma.contact.update({ where: { id }, data: contact });
  }

  async remove(id: string): Promise<Contact | null> {
    return this.prisma.contact.delete({ where: { id } });
  }
}

@Injectable()
export class contactListService {
  constructor(private readonly prisma: PrismaService) {}

  async create(contactList: ContactList): Promise<ContactList> {
    return this.prisma.contactList.create({ data: contactList });
  }

  async findAll(): Promise<ContactList[]> {
    return this.prisma.contactList.findMany();
  }

  async findOne(id: string): Promise<ContactList | null> {
    return this.prisma.contactList.findUnique({ where: { id } });
  }

  async update(id: string, contactList: ContactList): Promise<ContactList | null> {
    return this.prisma.contactList.update({ where: { id }, data: contactList });
  }

  async remove(id: string): Promise<ContactList | null> {
    return this.prisma.contactList.delete({ where: { id } });
  }
}

@Injectable()
export class ContactGroupService {
  constructor(private readonly prisma: PrismaService) {}

  async create(contactGroup: ContactGroup): Promise<ContactGroup> {
    return this.prisma.contactGroup.create({ data: contactGroup });
  }

  async findAll(): Promise<ContactGroup[]> {
    return this.prisma.contactGroup.findMany();
  }

  async findOne(id: string): Promise<ContactGroup | null> {
    return this.prisma.contactGroup.findUnique({ where: { id } });
  }

  async update(id: string, contactGroup: ContactGroup): Promise<ContactGroup | null> {
    return this.prisma.contactGroup.update({ where: { id }, data: contactGroup });
  }

  async remove(id: string): Promise<ContactGroup | null> {
    return this.prisma.contactGroup.delete({ where: { id } });
  }
}
