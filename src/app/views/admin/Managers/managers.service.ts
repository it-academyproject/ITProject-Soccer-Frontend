import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ManagersService {
  private managers: Manager[] = [
    {
      id: 1,
      type_user: 'admin',
      email: 'admin1@managers.com',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
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
      type_user: 'manager',
      email: 'manager12@managers.com',
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
  type_user: string;
  email: string;
  password: string;
  team_name: string;

  players: {};
}
