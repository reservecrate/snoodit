import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getHelloThere() {
    return ['arr', 'of', 'stuff'];
  }
}
