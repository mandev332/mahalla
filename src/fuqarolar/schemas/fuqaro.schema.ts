import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Address } from 'src/address/schemas/address.schema';

export type FuqaroDocument = HydratedDocument<Fuqaro>;

@Schema()
export class Fuqaro {
  @Prop({ required: true })
  username: string;

  @Prop()
  age: number;

  @Prop()
  gender: string;

  @Prop()
  phone: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Address' })
  address: Address;
}

export const FuqaroSchema = SchemaFactory.createForClass(Fuqaro);
