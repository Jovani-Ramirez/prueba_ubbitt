import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

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

  passwordsIguales(password1Name: string, password2Name: string) {

    return (formGroup: FormGroup) => {
      const password1Control = formGroup.controls[password1Name];
      const password2Control = formGroup.controls[password2Name];

      if (password1Control.value === password2Control.value) {
        password2Control.setErrors(null);
      } else {
        password2Control.setErrors({ noEsIgual: true });
      }
    };
  }
}
