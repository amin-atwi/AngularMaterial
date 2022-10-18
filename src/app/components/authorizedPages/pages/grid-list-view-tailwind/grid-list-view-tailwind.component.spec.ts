import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListViewTailwindComponent } from './grid-list-view-tailwind.component';

describe('GridListViewTailwindComponent', () => {
  let component: GridListViewTailwindComponent;
  let fixture: ComponentFixture<GridListViewTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListViewTailwindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListViewTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
