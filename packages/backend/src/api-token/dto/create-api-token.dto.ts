import { $Enums } from "@prisma/client";

export class CreateApiTokenDto {
    token: string;
    role: $Enums.UserRoleEnum;
    userId: string;
}
