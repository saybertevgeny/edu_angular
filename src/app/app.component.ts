import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search: string = '';
  searchField = 'title';
  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'The best bread in the world'},
    {title: 'JavaScript', text: 'The beast language in the world'}
  ];

  addPost(){
    this.posts.unshift({
      title: 'Angular8',
      text: 'Vladlien Angular8 course'
    })
  }
}
