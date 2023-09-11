import { PartialType } from '@nestjs/mapped-types';
import { CreateFuqarolarDto } from './create-fuqarolar.dto';

export class UpdateFuqarolarDto extends PartialType(CreateFuqarolarDto) {}
