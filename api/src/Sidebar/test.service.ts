import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getHelloThere() {
    return "Hello there! You're awesome!!!!";
  }
}
