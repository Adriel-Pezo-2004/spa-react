import { Module } from '@nestjs/common';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Issue, IssueSchema } from '../schemas/issue.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Issue.name, schema: IssueSchema }]),
  ],
  controllers: [IssueController],
  providers: [IssueService],
})
export class IssueModule {}
