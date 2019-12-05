import {Component} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;
  stream$: Subject<number> = new Subject<number>();
  counter: number = 0;

  constructor() {
    this.sub = this.stream$.subscribe(value => console.log('Subscribe', value));
  }

  stop() {
    this.sub.unsubscribe();
  }

  next() {
    this.stream$.next(++this.counter);
  }

  subscribe(){
    this.sub = this.stream$.subscribe(value => console.log('Subscribe', value))
  }

}
