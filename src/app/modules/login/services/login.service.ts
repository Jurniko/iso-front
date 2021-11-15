import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  hostApi = environment.hostApi

  constructor(private http:HttpClient) { }

  signIn(userAccount:User){
    return this.http.post(this.hostApi + 'auth/login',userAccount)
  }
}
