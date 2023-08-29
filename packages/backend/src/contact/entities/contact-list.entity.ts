import { Prisma } from '@prisma/client';

export class ContactList implements Prisma.ContactListUncheckedCreateInput {
    id?: string;
    contactId: string;
    contactGroupId: string;
}
