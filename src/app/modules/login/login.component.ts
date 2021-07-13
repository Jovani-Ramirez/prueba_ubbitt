import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public checked = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private changeDetector: ChangeDetectorRef
  ) {

    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]]
    });
   }

  ngOnInit(): void {
    this.dataService.isLogged().subscribe((d: boolean) => {
      console.log(d);
      if (d) window.location.replace('/informes');
      this.changeDetector.detectChanges();
    });
  }
  
  login(): void {
    const data = this.formGroup.value;
    localStorage.setItem('token', 'accesso');
    this.dataService.loggedToggle(true);
    this.router.navigate(['/informes']);
    this.changeDetector.detectChanges();
  }
}
