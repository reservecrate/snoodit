import { Injectable } from '@nestjs/common';

@Injectable()
export class SidebarService {
  getRelatedSubreddits() {
    return [
      'apexoutlands',
      'apexlfg',
      'competitiveapex',
      'apexlore',
      'apexuniversity',
      'apexrollouts',
      'titanfall',
    ];
  }
}
