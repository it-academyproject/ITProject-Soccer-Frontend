import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../../modules/user';
import { UserListService } from '../../../services/userlist.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-creator',
  templateUrl: './user-creator.component.html',
  styleUrls: ['./user-creator.component.css']
})
export class UserCreatorComponent implements OnInit {

user: User;

constructor(private userlistService: UserListService,
            private route: ActivatedRoute,
            private location: Location) { }
            ngOnInit(): void {
              this.getUser();
            }
getUser(): void {
          const id = +this.route.snapshot.paramMap.get('id');
          this.userlistService.getUser(id)
          .subscribe(user => this.user = user);
            }
goBack(): void {
          this.location.back();
            }
updateUser(): void {
        this.userlistService.updateUser(this.user)
                .subscribe(() => this.goBack());
            }
          }