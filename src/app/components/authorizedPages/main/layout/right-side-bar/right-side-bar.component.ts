import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss'],
})
export class RightSideBarComponent implements OnInit {
  isDarkTheme: Observable<boolean> | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  toggleDarkTheme() {
    this.themeService.toggleDarkTheme();
  }
}
