import {Component} from '@angular/core';
import{interval} from 'rxjs'; //Относится к некоторым элементам которые позволяют создвать стримы
//import{} from 'rxjs/operators'; //относится к операторам
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){
    const intervalStream$ = interval(1000);
    intervalStream$.subscribe((value) => {
      console.log(value);
    });
  }
}
