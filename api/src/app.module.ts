import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SidebarModule } from './Sidebar/sidebar.module';

@Module({
  imports: [SidebarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
