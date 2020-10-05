import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ManagersService {
  constructor(private http: HttpClient) {}

    getManagers()
    {
      const url = 'http//217.76.158.200:8181/api/users';
      return this.http.get(url);
  }
}
