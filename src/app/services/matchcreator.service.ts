import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MatchcreatorService {

  constructor(private http: HttpClient) { }

  getQuery( query :string ){

    const url = `http://217.76.158.200:8181/api/${ query }`;

    return this.http.get(url);
  
  
  }

  postQuery( query: string, item ){

    const url = `http://217.76.158.200:8181/api/${ query }`;

    return this.http.post(url, item);
  
  
  }
getTeams() {

  return this.getQuery('teams').pipe( map(data => data[ 'teams' ]
  ));

}
postMatch( match){

  return this.postQuery('matches', match);
}

}
