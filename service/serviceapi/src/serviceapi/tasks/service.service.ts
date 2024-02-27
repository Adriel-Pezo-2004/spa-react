import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { Service } from '../schemas/service.schema';

@Injectable()
export class ServiceService {
  constructor(@InjectModel(Service.name) private taskModel: Model<Service>) {}

  async create(createTaskDto: CreateServiceDto): Promise<Service> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Service[]> {
    return this.taskModel.find().exec();
  }

  async findOne(code: string): Promise<Service> {
    return this.taskModel.findById(code).exec();
  }

  async delete(code: string): Promise<Service> {
    return this.taskModel.findByIdAndDelete(code);
  }

  async update(code: string, createTaskDto: UpdateServiceDto): Promise<Service> {
    return this.taskModel.findByIdAndUpdate(code, createTaskDto, { new: true });
  }
}
