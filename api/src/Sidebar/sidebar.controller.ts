import { Controller, Get } from '@nestjs/common';
import { SidebarService } from './sidebar.service';

@Controller()
export class SidebarController {
  constructor(private readonly sidebarService: SidebarService) {}

  @Get('sidebar')
  getPosts() {
    return this.sidebarService.getRelatedSubreddits();
  }
}
