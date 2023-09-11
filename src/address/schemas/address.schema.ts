import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AddressDocument = HydratedDocument<Address>;

@Schema({ timestamps: true, collection: 'address' })
export class Address {
  @Prop({ required: true })
  name: string;

  @Prop()
  number: number;

  @Prop()
  image: string;

  @Prop({ default: null })
  deletedAt: Date;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
