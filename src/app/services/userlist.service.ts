import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Manager } from '../views/admin/Managers/managers.service';


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private usersUrl = 'http://217.76.158.200:8181/api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient)
  {
    console.log('service ready');
  }

/** GET users from the server */
getUsers(): Observable<Manager[]> {
  return this.http.get<Manager[]>(this.usersUrl)
}
 //////// Save methods //////////

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }
}

export interface User {
  id: number;
  typeuser: string;
  email: string;
}
