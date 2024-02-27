import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIssueDto } from '../dto/create-issue.dto';
import { UpdateIssueDto } from '../dto/update-issue.dto';
import { Issue } from '../schemas/issue.schema';

@Injectable()
export class IssueService {
  constructor(@InjectModel(Issue.name) private taskModel: Model<Issue>) {}

  async create(createTaskDto: CreateIssueDto): Promise<Issue> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Issue[]> {
    return this.taskModel.find().exec();
  }

  async findOne(code: string): Promise<Issue> {
    return this.taskModel.findById(code).exec();
  }

  async delete(code: string): Promise<Issue> {
    return this.taskModel.findByIdAndDelete(code);
  }

  async update(code: string, createTaskDto: UpdateIssueDto): Promise<Issue> {
    return this.taskModel.findByIdAndUpdate(code, createTaskDto, { new: true });
  }
}
