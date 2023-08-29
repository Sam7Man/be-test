import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { $Enums } from '@prisma/client';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    name?: string;
    email?: string;
    password?: string;
    role?: $Enums.UserRoleEnum;
}