import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  public newUser: FormGroup;
  public rol: any[];

  constructor(
    private formbuilder: FormBuilder,
    private validator: DataService
  ) {

    this.rol = [
      {id: 1, description: 'Super administrador'},
      {id: 2, description: 'Team leader'},
      {id: 2, description: 'Agente'}
    ];
    


    this.newUser = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]{2,254}')]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9,$]*$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      rol: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      password2: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      identification: ['', Validators.required],
      v_address: ['', Validators.required],
      c_birth: ['', Validators.required],
      contract: ['', Validators.required]
    }, {
      validators: this.validator.passwordsIguales('password', 'password2')
    });
  }

  ngOnInit(): void {
  }


  get passwordNoValido() {
    return this.newUser.get('password')?.invalid && this.newUser.get('password')?.touched;
  }

  get password2NoValido() {
    const password = this.newUser.get('password')?.value;
    const password2 = this.newUser.get('password2')?.value;

    return (password === password2) ? false : true;
  }


  addUser():void {
    const data = this.newUser.value;
    console.log(data);
  }

}
