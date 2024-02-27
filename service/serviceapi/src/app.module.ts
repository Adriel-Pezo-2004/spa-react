import { Module } from '@nestjs/common';
import { ServiceModule } from './serviceapi/tasks/service.module';
import { DateModule } from './dateapi/tasks/date.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { IssueModule } from './issueapi/tasks/issue.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServiceModule,
    DateModule,
    IssueModule,
    MongooseModule.forRoot('mongodb+srv://adriel:afpv2024@spa.2tizqrv.mongodb.net/'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
