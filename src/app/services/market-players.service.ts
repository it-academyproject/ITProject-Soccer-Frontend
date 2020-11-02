import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarketPlayersService {

  private url = 'http://217.76.158.200:8181/api';

  constructor( private http: HttpClient ) { }

  filteredPlayer( maxAge, minAge, defense, attack, keeper, pass ){
    return this.http.get( `${this.url}/sales/filter?max-age=${maxAge}&min-age=${minAge}&defense=${defense}&attack=${attack}&keeper=${keeper}&pass=${pass}`)
          .pipe( map(data => data['filtered sales']));
  }

}
