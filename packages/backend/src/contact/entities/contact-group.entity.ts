import { Prisma } from '@prisma/client';

export class ContactGroup implements Prisma.ContactGroupUncheckedCreateInput {
    id?: string;
    name: string;
    description: string;
}
