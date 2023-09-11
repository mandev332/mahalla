import { ApiProperty } from '@nestjs/swagger';

export class AddressEntity {
  @ApiProperty()
  name: string;
  @ApiProperty()
  number: number;
  @ApiProperty({ type: 'string', format: 'binary' })
  image?: string;
}
