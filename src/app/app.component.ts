import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  darkTheme = false;
  constructor(private themeService: ThemeService) {
    this.themeService.onToggleDarkTheme().subscribe((value) => {
      this.darkTheme = value;
    });
  }
  ngOnInit() {}
}
