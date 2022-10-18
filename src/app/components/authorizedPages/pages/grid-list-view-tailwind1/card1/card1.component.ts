import { Component, Input, OnInit } from '@angular/core';
import { BlogPostCard } from '../../grid-list-view-tailwind/models/blog-post-card.model';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss'],
})
export class Card1Component implements OnInit {
  @Input() data: BlogPostCard | undefined;
  constructor() {}

  ngOnInit(): void {}
}
