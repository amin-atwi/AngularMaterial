import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { BasicComponent } from './basic.component';

@NgModule({
  declarations: [BasicComponent],
  exports: [],
  imports: [CommonModule, LayoutModule, RouterModule, MatSidenavModule],
  providers: [],
})
export class BasicModule {}
