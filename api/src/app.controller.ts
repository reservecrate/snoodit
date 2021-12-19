import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IPost } from './interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts(): IPost[] {
    return this.appService.getPosts();
  }
}
