import { $Enums, Prisma } from '@prisma/client';


export class Account implements Prisma.AccountUncheckedCreateInput {
    id?: string;
    accountLogin: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    userId: string;
}