import { Component, Input, OnInit } from '@angular/core';
import { BlogPostCard } from '../models/blog-post-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: BlogPostCard | undefined;
  constructor() {}

  ngOnInit(): void {}
}
