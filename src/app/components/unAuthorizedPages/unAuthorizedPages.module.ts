import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from '../unAuthorizedPages/login/login.component';
import { UnAuthorizedPagesRoutingModule } from './unAuthorizedPages-routing.module';

@NgModule({
  declarations: [LoginComponent],
  exports: [],
  imports: [CommonModule, MatIconModule, UnAuthorizedPagesRoutingModule],
  providers: [],
})
export class UnAuthorizedPagesModule {}
