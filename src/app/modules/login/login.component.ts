import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  showPassword = false;
  loginFGroup !: FormGroup;
  hasError = false
  constructor(private loginService:LoginService, private _fBuilder:FormBuilder, private _router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('access_token')){
      this._router.navigate(['/dashboard']);
    }
    this.loginFGroup = this._fBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    })
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  submit(){
    this.loginService.signIn(this.loginFGroup.value).subscribe((e:any)=>{
      console.log(e)
      this._router.navigate(['/dashboard'])
      localStorage.setItem('access_token',e.access_token)
    },(httpException)=>{
      this.hasError = true;
    })
  }

}
