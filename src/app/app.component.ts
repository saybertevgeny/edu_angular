import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  obj = [
    {title: 'Post1', author: 'Vladilen', comments: [
        { name: 'Max', text: 'lorem1'},
        { name: 'Max', text: 'lorem2'},
        { name: 'Max', text: 'lorem3'},
      ]},
    {title: 'Post2', author: 'Kostya', comments: [
        { name: 'Petr', text: 'lorem1'},
        { name: 'Petr', text: 'lorem2'},
        { name: 'Petr', text: 'lorem3'},
      ]}
  ];
}
