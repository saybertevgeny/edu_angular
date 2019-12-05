import {Injectable} from '@angular/core';
//created command ng g s services/local-counter
@Injectable()
export class LocalCounterService {
  counter: number = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
