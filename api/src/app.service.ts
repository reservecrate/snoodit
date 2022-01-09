import { Injectable } from '@nestjs/common';
import { IPost } from './interfaces';

@Injectable()
export class AppService {
  getPosts(): IPost[] {
    return [
      {
        title: 'Post 1',
        content: 'Content 1',
        flair: 'Gameplay',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 425,
        comments: [
          'a comment',
          'second comment',
          'third comment',
          'fourth comment',
          'and so on',
        ],
      },
      {
        title: 'Post 2',
        content: 'Content 2',
        flair: 'Discussion',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 303,
        comments: [
          'a comment',
          'second comment',
          'third comment',
          'fourth comment',
          'and so on',
        ],
      },
      {
        title: 'Post 3',
        content: 'Content 3',
        flair: 'Humor',
        domain: 'self.apexlegends',
        author: 'reservecrate',
        score: 504,
        comments: [
          'a comment',
          'second comment',
          'third comment',
          'fourth comment',
          'and so on',
          'some random comment',
        ],
      },
      {
        title: 'Post 4',
        content: 'Content 4',
        flair: 'Leak',
        domain: 'self.apexlegends',
        author: 'BreezeHash',
        score: 872,
        comments: [
          'a comment',
          'second comment',
          'third comment',
          'fourth comment',
          'and so on',
        ],
      },
      {
        title: 'Post 5',
        content: 'Content 5',
        flair: 'Question',
        domain: 'i.redd.it',
        author: 'reservecrate',
        score: 63,
        comments: [
          'a comment',
          'second comment',
          'third comment',
          'fourth comment',
          'and so on',
        ],
      },
      {
        title: 'Post 6',
        content: 'Content 6',
        flair: 'Gameplay',
        domain: 'v.redd.it',
        author: 'ratiotile',
        score: 92,
        comments: [
          'a comment',
          'second comment',
          'third comment',
          'fourth comment',
          'and so on',
        ],
      },
      {
        title: 'Post 7',
        content: 'Content 7',
        flair: 'Gameplay',
        domain: 'v.redd.it',
        author: 'ratiotile',
        score: 36,
        comments: [
          'a comment',
          'second comment',
          'third comment',
          'fourth comment',
          'and so on',
        ],
      },
    ];
  }
}
