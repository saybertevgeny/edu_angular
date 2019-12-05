import {Component} from '@angular/core';
import {interval, Subscription} from 'rxjs'; //Относится к некоторым элементам которые позволяют создвать стримы
import {map, filter,switchMap} from 'rxjs/operators'; //относится к операторам
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;

  constructor() {
    const intervalStream$ = interval(500);
    this.sub = intervalStream$
      .pipe(
        filter(value => value % 2 == 0),
        map((value) => 'Mapped value ' + value),
        //switchMap(() => interval(500))
      )
      .subscribe((value) => {
        console.log(value);
      });
  }

  stop() {
    this.sub.unsubscribe();
  }
}
