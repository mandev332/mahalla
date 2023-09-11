import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsPhoneNumber,
  Max,
  Min,
  MaxLength,
} from 'class-validator';

export class Fuqarolar {
  @IsString()
  @MaxLength(25)
  readonly username: string;

  @IsInt()
  @ApiProperty()
  @Max(100)
  @Min(10)
  @ApiProperty()
  protected age: number;

  @IsNotEmpty()
  @ApiProperty()
  public gender: string;

  @IsPhoneNumber()
  @ApiProperty()
  protected phone: string;

  readonly create_at: Date;
}
