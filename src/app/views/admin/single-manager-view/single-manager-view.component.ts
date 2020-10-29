import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserListService } from './../../../services/userlist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-manager-view',
  templateUrl: './single-manager-view.component.html',
  styleUrls: ['./single-manager-view.component.css']
})
export class SingleManagerViewComponent implements OnInit {

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
}
