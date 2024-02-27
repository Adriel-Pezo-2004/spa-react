import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { Service } from '../schemas/service.schema';

@Injectable()
export class ServiceService {
  constructor(@InjectModel(Service.name) private serviceModel: Model<Service>) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const createdService = new this.serviceModel(createServiceDto);
    return createdService.save();
  }

  async findAll(): Promise<Service[]> {
    return this.serviceModel.find().exec();
  }

  async findOne(code: string): Promise<Service> {
    return this.serviceModel.findById(code).exec();
  }

  async delete(code: string): Promise<Service> {
    return this.serviceModel.findByIdAndDelete(code);
  }

  async update(code: string, updateTaskDto: UpdateServiceDto): Promise<Service> {
    return this.serviceModel.findByIdAndUpdate(code, updateTaskDto, { new: true });
  }
}
