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
import { ServiceService } from './service.service';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private tasksService: ServiceService) {}

  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  async create(@Body() body: CreateServiceDto) {
    try {
      return await this.tasksService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Task already exists');
      }
      throw error;
    }
  }

  @Get(':code')
  async findOne(@Param('code') code: string) {
    const task = await this.tasksService.findOne(code);
    if (!task) throw new NotFoundException('Task does not exist!');
    return task;
  }

  @Delete(':code')
  @HttpCode(204)
  async delete(@Param('code') code: string) {
    const task = await this.tasksService.delete(code);
    if (!task) throw new NotFoundException('Task does not exist!');
    return task;
  }

  @Put(':code')
  async update(@Param('code') code: string, @Body() body: UpdateServiceDto) {
    const task = await this.tasksService.update(code, body);
    if (!task) throw new NotFoundException('Task does not exist!');
    return task;
  }
}
