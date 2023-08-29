import { PartialType } from '@nestjs/mapped-types';
import { CreateApiTokenDto } from './create-api-token.dto';
import { $Enums } from '@prisma/client';

export class UpdateApiTokenDto extends PartialType(CreateApiTokenDto) {
    token?: string;
    role?: $Enums.UserRoleEnum;
    userId?: string;
}