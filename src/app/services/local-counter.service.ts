import {Injectable} from '@angular/core';
import {LogService} from './log.service';
//created command ng g s services/local-counter
@Injectable()
export class LocalCounterService {
  counter: number = 0;

  constructor(private logService:LogService){}

  increase() {
    this.logService.log('increase in local')
    this.counter++;
  }

  decrease() {
    this.logService.log('decrease in local')
    this.counter--;
  }
}
