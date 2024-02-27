import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DateDocument = HydratedDocument<Date>;

@Schema({
  timestamps: true,
})
export class Date {
  @Prop({ unique: true, trim: true, required: true })
  datedCode: string;

  @Prop({ trim: true })
  serviceCode: string;

  @Prop({ trim: true })
  nameClient: string;
}

export const DateSchema = SchemaFactory.createForClass(Date);
