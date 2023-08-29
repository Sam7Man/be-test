import { $Enums, Prisma } from '@prisma/client';


export class UserEntity implements Prisma.UserUncheckedCreateInput {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    lastActivityAt?: Date | string | null
    email: string
    emailVerified?: string | null
    name: string
    password: string
    workspaceId: string
    role: $Enums.UserRoleEnum
}