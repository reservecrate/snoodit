import { Module } from '@nestjs/common';
import { SidebarController } from './sidebar.controller';
import { SidebarService } from './sidebar.service';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [SidebarController, TestController],
  providers: [SidebarService, TestService],
})
export class SidebarModule {}
