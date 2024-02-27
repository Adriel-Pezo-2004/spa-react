import { Module } from '@nestjs/common';
import { DateController } from './date.controller';
import { DateService } from './date.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Date, DateSchema } from '../schemas/date.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Date.name, schema: DateSchema }]),
  ],
  controllers: [DateController],
  providers: [DateService],
})
export class DateModule {}
