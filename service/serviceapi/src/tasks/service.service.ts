import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-service.dto';
import { UpdateTaskDto } from 'src/dto/update-service.dto';
import { Task } from 'src/schemas/service.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async delete(id: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id);
  }

  async update(id: string, createTaskDto: UpdateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, createTaskDto, { new: true });
  }
}
