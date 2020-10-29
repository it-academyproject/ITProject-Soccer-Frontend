import { Component, OnInit } from '@angular/core';
import { UserListService } from './../../../services/userlist.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../../modules/user';

@Component({
  selector: 'app-user-ceator-view',
  templateUrl: './user-ceator-view.component.html',
  styleUrls: ['./user-ceator-view.component.css']
})
export class UserCeatorViewComponent implements OnInit {

  user: User;

  constructor( private userListService: UserListService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'new' ) {
      this.userListService.getUser( id )
        .subscribe( (resp: User) => {
          this.user = resp;
          this.user.id = id;
        });
    }
  }


  save(form: NgForm){
    if (form.invalid) {
      console.log('form invalid');
      return;
    }

    if ( this.user.id ){
      const ok = confirm(`Are you sure you want to modificate this user?`);
      if (ok === true){
          this.userListService.updateUser( this.user ).subscribe(resp => {
            console.log(resp);
          });
        }


    }else{
      this.userListService.newUser( this.user).subscribe(resp => {
        console.log(resp);
        this.user = resp;
      });
    }
  }

}

