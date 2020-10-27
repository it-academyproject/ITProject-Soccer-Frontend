import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Manager } from '../views/admin/Managers/managers.service';
import { User } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private usersUrl = 'http://217.76.158.200:8181/api/users/';  // URL to web api

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

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/managers/${id}`;
    return this.http.get<User>(url)
  }
 //////// Save methods //////////

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/type/${user.id}`;
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

/** DELETE: delete a user from the server */
deleteUser(user: User | number): Observable<User> {
  const id = typeof user === 'number' ? user : user.id;
  const url = `${this.usersUrl}/${id}`;

  return this.http.delete<User>(url, this.httpOptions);
}
/** PUT: update the user on the server */
updateUser(user: User): Observable<any> {
  const url = `${this.usersUrl}/type/${user.id}`;
  return this.http.put(this.usersUrl, user, this.httpOptions)
  }
}