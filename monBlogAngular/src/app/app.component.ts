import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
  {
    title: 'Premier post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    loveIts: 1,
    created_at: new Date()
  },
   {
    title: 'Deuxième post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    loveIts: 3,
    created_at: new Date()
   },
   {
    title: 'Troisième post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    loveIts: 0,
    created_at: new Date()
   },
  ];
}
