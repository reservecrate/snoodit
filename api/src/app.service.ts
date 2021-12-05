import { Injectable } from '@nestjs/common';
import { IPost } from './interfaces';

@Injectable()
export class AppService {
  getHello(): IPost[] {
    return [
      {
        title: 'Post 1',
        content: 'Content 1',
        flair: 'Gameplay',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 425,
      },
      {
        title: 'Post 2',
        content: 'Content 2',
        flair: 'Discussion',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 303,
      },
      {
        title: 'Post 3',
        content: 'Content 3',
        flair: 'Humor',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 504,
      },
      {
        title: 'Post 4',
        content: 'Content 4',
        flair: 'Leak',
        domain: 'self.apexlegends',
        author: 'BreezeHash',
        score: 872,
      },
      {
        title: 'Post 5',
        content: 'Content 5',
        flair: 'Question',
        domain: 'i.redd.it',
        author: 'reservecrate',
        score: 63,
      },
    ];
  }
}
