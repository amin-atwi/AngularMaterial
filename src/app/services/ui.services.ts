import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showRightSide: boolean = false;
  private rightSideBarSubject = new Subject<any>();

  constructor() {}

  toggleShowRightSideBar(): void {
    this.showRightSide = !this.showRightSide;
    this.rightSideBarSubject.next(this.showRightSide);
  }

  onRightSideBarToggle(): Observable<any> {
    return this.rightSideBarSubject.asObservable();
  }
}
