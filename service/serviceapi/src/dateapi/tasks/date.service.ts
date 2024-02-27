import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDateDto } from '../dto/create-date.dto';
import { UpdateDateDto } from '../dto/update-date.dto';
import { Date } from '../schemas/date.schema';

@Injectable()
export class DateService {
  constructor(@InjectModel(Date.name) private taskModel: Model<Date>) {}

  async create(createTaskDto: CreateDateDto): Promise<Date> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Date[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Date> {
    return this.taskModel.findById(id).exec();
  }

  async delete(id: string): Promise<Date> {
    return this.taskModel.findByIdAndDelete(id);
  }

  async update(id: string, createTaskDto: UpdateDateDto): Promise<Date> {
    return this.taskModel.findByIdAndUpdate(id, createTaskDto, { new: true });
  }
}
