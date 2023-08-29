import { $Enums, Prisma } from '@prisma/client';

export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    workspaceId: Prisma.WorkspaceUncheckedCreateInput;
    role: $Enums.UserRoleEnum;
}