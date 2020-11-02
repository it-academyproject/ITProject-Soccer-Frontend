import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketPlayersService } from '../../../services/market-players.service';


@Component({
  selector: 'app-skill-filter',
  templateUrl: './skill-filter.component.html',
  styleUrls: ['./skill-filter.component.css']
})
export class SkillFilterComponent implements OnInit {

  minYears: number[];
  maxYears: number[];

  maxage;
  minage;
  attack = 5;
  defense = 5;
  pass = 5;
  keeper = 5;
  limitDate;

  players: any[] = [];



  constructor( private http: HttpClient,
               private filter: MarketPlayersService) {

    this.minYears = new Array ( 100 ).fill( 0 ).map( (x, i) => i + 1);
    this.maxYears = new Array ( 100 ).fill( 0 ).map( (x, i) => 100 - i - 1);

  }

  ngOnInit(): void {
  }

  valueAttack(e) {
    this.attack = e.target.value;
  }

  valueDefense(e) {
    this.defense = e.target.value;
  }

  valuePass(e) {
    this.pass = e.target.value;
  }

  valueKeeper(e) {
    this.keeper = e.target.value;
  }


  setMaxAge( maxAge: number ){
    this.maxage = maxAge;
  }

  setMinAge( minAge: number ){
    this.minage = minAge;
  }

  // setAttack( attack: number) {
  //   this.attack = attack;
  // }

  search(maxAge, minAge, defense, attack, keeper, pass){
    console.log('search', maxAge, minAge, defense, attack, keeper, pass);
    defense = this.defense;
    keeper = this.keeper;
    pass = this.pass;
    attack = this.attack;

    this.filter.filteredPlayer(maxAge, minAge, defense, attack, keeper, pass)
    .subscribe ( (data: any) => {
      this.players = data;
      console.log('search data', this.players);
    });

    }

}

