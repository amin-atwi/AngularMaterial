import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.services';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  RSideBarOpen = true;
  LSideBarOpen = false;
  constructor(private uiService: UiService) {
    this.uiService.onRightSideBarToggle().subscribe((value) => {
      this.LSideBarOpen = value;
    });
  }

  ngOnInit(): void {}
  RSideBarToggle($event: any): void {
    this.RSideBarOpen = !this.RSideBarOpen;
  }
}
