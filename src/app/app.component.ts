import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];
  obj = {
    a: 1, b: {c: 2}, toString() {
      return 'test';
    }
  };
  inputValue = '';

  // img = 'https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/8575147831553750379-128.png';

  //

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is over');
    //   this.img = 'https://angular.io/assets/images/logos/angular/angular.svg';
    // }, 5000);
  }

  onInput(event: KeyboardEvent) {
    console.log('Event', event);
    this.inputValue = (<HTMLInputElement> event.target).value;
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  onClick(event) {
    console.log('click');
  }
}
