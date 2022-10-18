import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() ToggleSideBarForLeftMenu: EventEmitter<any> =
    new EventEmitter<any>();
  constructor(private uiService: UiService, private route: Router) {}

  ngOnInit(): void {}

  toggleLeftSideBar(): void {
    this.ToggleSideBarForLeftMenu.emit();
  }

  toggleRightSideBar(): void {
    this.uiService.toggleShowRightSideBar();
  }
  logout() {
    this.route.navigate([`/login`]);
  }
}
