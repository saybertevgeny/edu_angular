import {Component} from '@angular/core';
import {interval, Subscription} from 'rxjs'; //Относится к некоторым элементам которые позволяют создвать стримы
//import{} from 'rxjs/operators'; //относится к операторам
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sub: Subscription;

  constructor(){
    const intervalStream$ = interval(500);
    this.sub = intervalStream$.subscribe((value) => {
      console.log(value);
    });
  }

  stop(){
    this.sub.unsubscribe();
  }
}
