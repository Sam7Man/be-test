import { PartialType } from '@nestjs/mapped-types';
import { CreateContactGroupDto } from './create-contact-group.dto';

export class UpdateContactGroupDto extends PartialType(CreateContactGroupDto) {
    name?: string;
    description?: string;
}
