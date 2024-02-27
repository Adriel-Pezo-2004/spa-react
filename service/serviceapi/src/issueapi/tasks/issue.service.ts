import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIssueDto } from '../dto/create-issue.dto';
import { UpdateIssueDto } from '../dto/update-issue.dto';
import { Issue } from '../schemas/issue.schema';

@Injectable()
export class IssueService {
  constructor(@InjectModel(Issue.name) private issueModel: Model<Issue>) {}

  async create(createIssueDto: CreateIssueDto): Promise<Issue> {
    const createdIssue = new this.issueModel(createIssueDto);
    return createdIssue.save();
  }

  async findAll(): Promise<Issue[]> {
    return this.issueModel.find().exec();
  }

  async findOne(code: string): Promise<Issue> {
    return this.issueModel.findById(code).exec();
  }

  async delete(code: string): Promise<Issue> {
    return this.issueModel.findByIdAndDelete(code);
  }

  async update(code: string, updateIssueDto: UpdateIssueDto): Promise<Issue> {
    return this.issueModel.findByIdAndUpdate(code, updateIssueDto, { new: true });
  }
}
