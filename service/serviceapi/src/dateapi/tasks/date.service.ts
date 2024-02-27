import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDateDto } from '../dto/create-date.dto';
import { UpdateDateDto } from '../dto/update-date.dto';
import { Date } from '../schemas/date.schema';

@Injectable()
export class DateService {
  constructor(@InjectModel(Date.name) private dateModel: Model<Date>) {}

  async create(createDateDto: CreateDateDto): Promise<Date> {
    const createdDate = new this.dateModel(createDateDto);
    return createdDate.save();
  }

  async findAll(): Promise<Date[]> {
    return this.dateModel.find().exec();
  }

  async findOne(id: string): Promise<Date> {
    return this.dateModel.findById(id).exec();
  }

  async delete(id: string): Promise<Date> {
    return this.dateModel.findByIdAndDelete(id);
  }

  async update(id: string, updateDateDto: UpdateDateDto): Promise<Date> {
    return this.dateModel.findByIdAndUpdate(id, updateDateDto, { new: true });
  }
}
