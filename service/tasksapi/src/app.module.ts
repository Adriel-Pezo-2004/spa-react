import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TasksModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tasksd'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
