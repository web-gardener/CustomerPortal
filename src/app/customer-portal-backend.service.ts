import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppStyle } from './c-portal/cportal.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerPortalBackendService {

  private appStyle$: BehaviorSubject<AppStyle> = new BehaviorSubject(null);

  changeStyle(prop, val) {
    this.appStyle$.next({... this.appStyle$.value, [prop]: val})
  }

  getAppStyle(): Observable<AppStyle> {
    return this.appStyle$.asObservable();
  }

  setStyle(style: AppStyle) {
    this.appStyle$.next(style);
  }

  constructor() {
    this.appStyle$.next({
      backgroundcolor: '#e7e7e7',
      actioncolor: '#2DDBD1',
      notifcolor: '#14B6AC',
      logosrc: '../../assets/img/logo.png',
      faviconsrc: '../../assets/img/favicon.png',
    });
  }
}
