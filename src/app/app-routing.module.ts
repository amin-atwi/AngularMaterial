import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './components/authorizedPages/main/basic/basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/authorizedPages/authorizedPages.module').then(
            (m) => m.AuthorizedPagesModule
          ),
      },
    ],
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './components/unAuthorizedPages/unAuthorizedPages.module'
          ).then((m) => m.UnAuthorizedPagesModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
