import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  icon: string;
  pageName?: string;
}
@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  items: FoodNode[] = [
    { children: [], name: 'Dashboard', icon: 'dashboard icon', pageName: '' },
    {
      children: [],
      name: 'Grid List View',
      icon: 'feedback icon',
      pageName: 'gridList',
    },
    {
      name: 'Cards',
      icon: 'class icon',
      children: [
        {
          name: 'Cards',
          icon: 'code icon',
          children: [
            {
              name: 'Grid List View Tailwind 1',
              icon: 'dashboard icon',
              pageName: 'gridListTailwind1',
            },
            {
              name: 'Grid List View Tailwind',
              icon: 'dashboard icon',
              pageName: 'gridListTailwind',
            },
          ],
        },
        { name: 'item 1.2', icon: 'description icon' },
        { name: 'item 1.3', icon: 'description icon' },
      ],
    },
    {
      children: [
        { name: 'item 3.1', icon: 'description icon' },
        { name: 'item 3.2', icon: 'dns icon' },
        { name: 'item 3.3', icon: 'event icon' },
      ],
      name: 'Tables',
      icon: 'done icon',
    },
    { children: [], name: 'item 2', icon: 'dashboard icon' },
    {
      children: [{ name: 'item 4.1', icon: 'event seat icon' }],
      name: 'item 4',
      icon: 'event icon',
    },
  ];

  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor(private route: Router) {
    this.dataSource.data = this.items;
  }

  ngOnInit(): void {}

  hasChild(_: number, node: FoodNode) {
    return !!node.children && node.children.length > 0;
  }

  onItemClick(nodeName: any) {
    this.route.navigate([`/${nodeName}`]);
  }
}
