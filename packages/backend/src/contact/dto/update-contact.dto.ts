import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';

export class UpdateContactDto extends PartialType(CreateContactDto) {
    workspaceId?: string;
    name?: string;
    phoneNumber?: string;
    email?: string;
    address?: string;
}
