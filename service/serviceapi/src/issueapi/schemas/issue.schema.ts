import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IssueDocument = HydratedDocument<Issue>;

@Schema({
  timestamps: true,
})
export class Issue {
  @Prop({ unique: true, trim: true, required: true })
  issueCode: string;

  @Prop({ trim: true })
  datedCode: string;

  @Prop({ trim: true })
  pay: number;
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
