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

  headers = ['User id', 'Email','User type'];
  user: any = {};

constructor(private userListService: UserListService) {
      this.userListService.getUsers().subscribe(
        (data: any) => {
          console.log(data);
          this.user = data;
          console.log(this.user);
        }
      );
    }
  
    ngOnInit(): void {
      this.user = this.userListService.getUsers();
      console.log(this.user);
    }
  
    deleteUser(id){
      const ok = confirm(`Are you sure you want to delete a user?`);
      if (ok === true){
        this.userListService.deleteUser( id ).subscribe();
      }
    }
  
  }
