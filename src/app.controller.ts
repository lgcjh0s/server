import { Controller, Get, Render, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('main')
  @Render('main.hbs')
  getMain() {
    return {}
  }

  @Get('api/data')
  async getApiData(@Query('type') type: string, @Query('keyword') keyword: string) {
      return await this.appService.getApiData(type, keyword);
  }
}
