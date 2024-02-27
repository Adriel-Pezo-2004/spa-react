import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema({
  timestamps: true,
})
export class Service {
  @Prop({ unique: true, trim: true, required: true })
  code: string;

  @Prop({ trim: true })
  name: string;

  @Prop({ trim: true })
  price: number;

  @Prop({ default: false })
  done: boolean;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
