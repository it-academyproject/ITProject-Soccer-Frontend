import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private player: Player[] = [
    {
      id: 1,
      name: 'Lionel Messi',
      age: 33,
      aka: 'LM10',
      img: '/assets/Images/player/messi.jpg',
      team: 'FC Barcelona',
      keeper: 25,
      defense: 75,
      passing: 100,
      attack: 100,
    },
    {
      id: 2,
      name: 'Cristiano Ronaldo',
      age: 35,
      aka: 'CR7',
      img: '/assets/Images/player/cristiano.jpg',
      team: 'Juventus FC',
      keeper: 0,
      defense: 50,
      passing: 100,
      attack: 100,
    },
    {
      id: 3,
      name: 'James Rodriguez',
      age: 29,
      aka: 'JR',
      img: '/assets/Images/player/JR.jpg',
      team: 'Everton FC',
      keeper: 0,
      defense: 50,
      passing: 75,
      attack: 75,
    },
    {
      id: 4,
      name: 'Sergio Ramos',
      age: 34,
      aka: 'SR',
      img: '/assets/Images/player/SR.jpg',
      team: 'Real Madrid CF',
      keeper: 0,
      defense: 100,
      passing: 75,
      attack: 75,
    },
    {
      id: 5,
      name: 'Joaquin Sanchez',
      age: 39,
      aka: 'JS',
      img: '/assets/Images/player/JS.jpg',
      team: 'Real Betis Balompié',
      keeper: 0,
      defense: 50,
      passing: 75,
      attack: 50,
    },
    {
      id: 6,
      name: 'Kylian Mbappé',
      age: 21,
      aka: 'KM',
      img: '/assets/Images/player/KM.jpg',
      team: 'Paris Saint-Germain FC',
      keeper: 25,
      defense: 50,
      passing: 100,
      attack: 100,
    },
    {
      id: 7,
      name: 'Kevin De Bruyne',
      age: 29,
      aka: 'KB',
      img: '/assets/Images/player/KB.jpg',
      team: 'Manchester City FC',
      keeper: 25,
      defense: 75,
      passing: 100,
      attack: 50,
    },
  ];

  constructor() {}

  getPlayer(): Player[] {
    return this.player;
  }

  getPlayeri(id: number) {
    return this.player[id];
  }
}

export interface Player {
  id: number;
  name: string;
  age: number;
  aka: string;
  img: string;
  team: string;
  keeper: number;
  defense: number;
  passing: number;
  attack: number;
}
