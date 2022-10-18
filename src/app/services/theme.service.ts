import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme: boolean = false;
  private darkThemeSubject = new Subject<boolean>();

  toggleDarkTheme(): void {
    this.darkTheme = !this.darkTheme;
    this.darkThemeSubject.next(this.darkTheme);
  }

  onToggleDarkTheme(): Observable<any> {
    return this.darkThemeSubject.asObservable();
  }
}
