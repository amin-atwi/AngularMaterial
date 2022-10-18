import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListViewTailwind1Component } from './grid-list-view-tailwind1.component';

describe('GridListViewTailwind1Component', () => {
  let component: GridListViewTailwind1Component;
  let fixture: ComponentFixture<GridListViewTailwind1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListViewTailwind1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListViewTailwind1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
