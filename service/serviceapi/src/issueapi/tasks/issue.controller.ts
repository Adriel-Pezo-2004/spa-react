import {
  Body,
  ConflictException,
  NotFoundException,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  HttpCode,
  Put,
} from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto } from '../dto/create-issue.dto';
import { UpdateIssueDto } from '../dto/update-issue.dto';

@Controller('issue')
export class IssueController {
  constructor(private issueService: IssueService) {}

  @Get()
  async findAll() {
    return this.issueService.findAll();
  }

  @Post()
  async create(@Body() body: CreateIssueDto) {
    try {
      return await this.issueService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Servicio ya existente');
      }
      throw error;
    }
  }

  @Get(':code')
  async findOne(@Param('code') code: string) {
    const task = await this.issueService.findOne(code);
    if (!task) throw new NotFoundException('Servicio no existe!');
    return task;
  }

  @Delete(':code')
  @HttpCode(204)
  async delete(@Param('code') code: string) {
    const task = await this.issueService.delete(code);
    if (!task) throw new NotFoundException('Servicio no existe!');
    return task;
  }

  @Put(':code')
  async update(@Param('code') code: string, @Body() body: UpdateIssueDto) {
    const task = await this.issueService.update(code, body);
    if (!task) throw new NotFoundException('Servicio no existe!');
    return task;
  }
}
