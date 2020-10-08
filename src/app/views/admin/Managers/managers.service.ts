import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ManagersService {
  private managers: Manager[] = [
    {
      id: 1,
      email: 'manager1@managers.com',
      password: 'password123',
      team_name: 'My Team Name',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 2,
      email: 'manager2@managers.com',
      password: 'password123',
      team_name: 'My Team Name 2',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 3,
      email: 'manager3@managers.com',
      password: 'password123',
      team_name: 'My Team Name 3',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 4,
      email: 'manager4@managers.com',
      password: 'password123',
      team_name: 'My Team Name 4',
      players: [
        'Messi',
        'Cristiano',
        'Neymar Jr.',
        'Hazard',
        'Kevin de Bruyne',
        'Oblak',
      ],
    },
    {
      id: 5,
      email: 'manager5@managers.com',
      password: 'password123',
      team_name: 'My Team Name 5',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 6,
      email: 'manager6@managers.com',
      password: 'password123',
      team_name: 'My Team Name 6',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 7,
      email: 'manager7@managers.com',
      password: 'password123',
      team_name: 'My Team Name 7',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 8,
      email: 'manager8@managers.com',
      password: 'password123',
      team_name: 'My Team Name 8',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 9,
      email: 'manager9@managers.com',
      password: 'password123',
      team_name: 'My Team Name 9',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 10,
      email: 'manager10@managers.com',
      password: 'password123',
      team_name: 'My Team Name 10',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 11,
      email: 'manager11@managers.com',
      password: 'password123',
      team_name: 'My Team Name 11',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
    {
      id: 12,
      email: 'manager4@managers.com',
      password: 'password123',
      team_name: 'My Team Name 4',
      players: [
        { id: 1, name: 'Messi' },
        { id: 2, name: 'Cristiano' },
        { id: 3, name: 'Neymar Jr.' },
        { id: 4, name: 'Kevin de Bruyne' },
        { id: 5, name: 'Oblak' },
      ],
    },
  ];
  constructor() {}
  getManagers(): Manager[] {
    return this.managers;
  }
}
export interface Manager {
  id: number;
  email: string;
  password: string;
  team_name: string;

  players: {};
}
