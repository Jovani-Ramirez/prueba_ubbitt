import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private logged: BehaviorSubject<any>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.logged = new BehaviorSubject(!!localStorage.getItem('token'));
  }

  isLogged(): Observable<any> {
    return this.logged.asObservable();
  }

  loggedToggle(value: boolean): void {
    this.logged.next(value);
  }

  logout() {
    localStorage.clear()
    this.loggedToggle(false);
    this.router.navigate(['/login']);
  }

  getUSers() {
    return this.http.get('../../assets/json/data.json');
  }
}
