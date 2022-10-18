import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthorizedPagesRoutingModule } from './authorizedPages-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GridListViewComponent } from './pages/grid-list-view/grid-list-view.component';
import { FormsModule } from '@angular/forms';
import { GridListViewTailwindComponent } from './pages/grid-list-view-tailwind/grid-list-view-tailwind.component';
import { CardComponent } from './pages/grid-list-view-tailwind/card/card.component';
import { GridListViewTailwind1Component } from './pages/grid-list-view-tailwind1/grid-list-view-tailwind1.component';
import { Card1Component } from './pages/grid-list-view-tailwind1/card1/card1.component';
import { DialogComponent } from './pages/dialog/dialog.component';

@NgModule({
  declarations: [
    GridListViewComponent,
    DashboardComponent,
    GridListViewTailwindComponent,
    CardComponent,
    GridListViewTailwind1Component,
    Card1Component,
    DialogComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    AuthorizedPagesRoutingModule,
    MatDividerModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
})
export class AuthorizedPagesModule {}
