import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../modules/login.interface';
import { UsersI } from '../modules/users.interface';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi = 'http://217.76.158.200:8181';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private router: Router) {
    console.log('service ready');
  }

  onLoginUser(form: LoginI): Observable<UsersI>{
    const urlLogin = this.urlApi + '/api/login';
    return this.http
    .post<UsersI>(urlLogin, form)
    .pipe(map(data => data));
  }

  setUser(user): void{
    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);
  }

  setToken(token): void{
    localStorage.setItem('accesToken', token);
  }

  getToken(){
    return localStorage.getItem('accesToken');
  }

  getCurrentUser(){
    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(currentUser);
    return user;
  }

  logoutUser(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
