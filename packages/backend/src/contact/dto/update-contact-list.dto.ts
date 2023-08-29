import { PartialType } from '@nestjs/mapped-types';
import { CreateContactListDto } from './create-contact-list.dto';

export class UpdateContacListtDto extends PartialType(CreateContactListDto) {
    contactGroupId?: string;
    contactId?: string;
}
