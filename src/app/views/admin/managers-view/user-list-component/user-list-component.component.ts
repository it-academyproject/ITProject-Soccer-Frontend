import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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

  trash:SafeHtml;
  search:SafeHtml;
  managers = [null];
  users: Manager[];

  constructor(private sanitizer: DomSanitizer, 
              private managersService: ManagersService,
              private userlistService: UserListService) { }

  ngOnInit() {
    this.managers = this.managersService.getManagers();
    this.trash = this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" class="trashIcon" viewBox="0 0 288 384" width="19" height="25"><path fill="#FFFDF9" d="M288 49.3h-80v-20C208 13.1 194.9 0 178.7 0h-69.5C93.1 0 80 13.1 80 29.3v20H0V64h21.1l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L267.6 64H288V49.3zm-193.4-20c0-8.1 6.6-14.7 14.6-14.7h69.5c8.1 0 14.6 6.6 14.6 14.7v20H94.6v-20zm135 324.6v.8c0 8.1-6.6 14.7-14.6 14.7H74c-8.1 0-14.6-6.6-14.6-14.7v-.8L35.7 64h217.2l-23.3 289.9z"/><path fill="#FFFDF9" d="M137 96h14v241h-14zM208 96h-14.6l-10.7 241h14.6zM94.5 96H80l10.7 241h14.6z"/></svg>');
    this.search = this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384" width="23" height="25"><path d="M280.5 234c15-23.6 23.8-51.6 23.8-81.7C304.3 68.2 236.2 0 152.2 0 68.1 0 0 68.2 0 152.3s68.1 152.3 152.1 152.3c30.5 0 58.9-9 82.7-24.4l6.9-4.8L350.3 384l33.7-34.3-108.5-108.6 5-7.1zM237.4 67.2c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85-52.9 35.2-85 35.2-62.3-12.5-85-35.2-35.2-52.9-35.2-85 12.5-62.3 35.2-85 52.9-35.2 85-35.2 62.3 12.5 85 35.2z" fill="#FFFDF9"/></svg>');
    this.getUsers();
  }
      getUsers(): void {
      this.userlistService.getUsers()
          .subscribe(users => this.users = users);
          console.log(this.managers);
  }}
