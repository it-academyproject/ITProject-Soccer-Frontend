import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Manager } from '../views/admin/Managers/managers.service';
import { map} from 'rxjs/operators';
import { User } from '../modules/user';

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
getUsers(): Observable<any> {
  return this.http.get<any>(this.usersUrl)
}

  /** GET user by id. Will 404 if id not found */
  getUser(id: string): Observable<User> {
    const url = `${this.usersUrl}/managers/${id}`;
    return this.http.get<User>(url)
  }
 //////// Save methods //////////

  /** POST: add a new user to the server */
  newUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/admin`;
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  }

/** DELETE: delete a user from the server */
deleteUser(id: string): Observable<User> {
  const url = `${this.usersUrl}/${id}`;

  return this.http.delete<User>(url, this.httpOptions);
}
/** PUT: update a user on the server */
updateUser(user: User): Observable<typeof user> {
  const url = `${this.usersUrl}/type/${user.id}`;
  return this.http.put<User>(url, user, this.httpOptions)
}} 