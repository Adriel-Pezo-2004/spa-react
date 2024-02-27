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
  import { DateService } from './date.service';
  import { CreateDateDto } from '../dto/create-date.dto';
  import { UpdateDateDto } from '../dto/update-date.dto';
  
  @Controller('date')
  export class DateController {
    constructor(private dateService: DateService) {}
  
    @Get()
    async findAll() {
      return this.dateService.findAll();
    }
  
    @Post()
    async create(@Body() body: CreateDateDto) {
      try {
        return await this.dateService.create(body);
      } catch (error) {
        if (error.code === 11000) {
          throw new ConflictException('La cita ya esta registrada');
        }
        throw error;
      }
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const task = await this.dateService.findOne(id);
      if (!task) throw new NotFoundException('La cita no existe!');
      return task;
    }
  
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
      const task = await this.dateService.delete(id);
      if (!task) throw new NotFoundException('La cita no existe!');
      return task;
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateDateDto) {
      const task = await this.dateService.update(id, body);
      if (!task) throw new NotFoundException('La cita no existe!');
      return task;
    }
  }
  