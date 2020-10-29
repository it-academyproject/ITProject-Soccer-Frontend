import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ManagersService } from './../../Managers/managers.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserListService } from '../../../../services/userlist.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-manager-info',
  templateUrl: './manager-info.component.html',
  styleUrls: ['./manager-info.component.css']
})
export class ManagerInfoComponent implements OnInit {
  user: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private userListService: UserListService,
    private Route: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.getUser(params['id']);
    });
  }

  ngOnInit(): void {}

  getUser(id){
    this.userListService.getUser(id).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      }
    );
      }
      
deleteUser(id){
  const ok = confirm(`Are you sure you want to delete ${this.user.id}?`)
  if (ok === true){
    this.userListService.deleteUser( id ).subscribe();
    this.Route.navigate(['/admin/users']);
  }
}
}