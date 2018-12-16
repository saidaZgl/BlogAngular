import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContents: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() posts;

  constructor() { }

  ngOnInit() {
  }

}
