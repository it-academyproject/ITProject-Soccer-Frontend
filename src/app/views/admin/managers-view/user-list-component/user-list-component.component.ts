import { Component, OnInit } from '@angular/core';
import { ManagersService } from './../../Managers/managers.service';
import { UserListService } from '../../../../services/userlist.service';
import { Observable, of } from 'rxjs';
import { Manager } from '../../Managers/managers.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {

  managers = [null];
  users: Manager[];

  constructor(
              private managersService: ManagersService,
              private userlistService: UserListService) { }

  ngOnInit() {
    this.managers = this.managersService.getManagers();
    this.getUsers();
  }
      getUsers(): void {
      this.userlistService.getUsers()
          .subscribe(users => this.users = users);
          console.log(this.managers);
  }
  deleteUser(id: number){
    const ok = confirm(`Are you sure you want to delete a user?`);
    if (ok == true){
      this.userlistService.deleteUser( id ).subscribe();
    }
  }

}



