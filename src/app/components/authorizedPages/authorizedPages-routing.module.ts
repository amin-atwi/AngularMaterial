import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GridListViewTailwindComponent } from './pages/grid-list-view-tailwind/grid-list-view-tailwind.component';
import { GridListViewTailwind1Component } from './pages/grid-list-view-tailwind1/grid-list-view-tailwind1.component';
import { GridListViewComponent } from './pages/grid-list-view/grid-list-view.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'gridList',
    component: GridListViewComponent,
  },
  {
    path: 'gridListTailwind',
    component: GridListViewTailwindComponent,
  },
  {
    path: 'gridListTailwind1',
    component: GridListViewTailwind1Component,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedPagesRoutingModule {}
