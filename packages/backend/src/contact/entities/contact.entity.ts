import { Prisma } from '@prisma/client';

export class Contact implements Prisma.ContactUncheckedCreateInput {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    workspaceId: string;
    name: string;
    phoneNumber: string;
    email: string;
    address: string;
}
