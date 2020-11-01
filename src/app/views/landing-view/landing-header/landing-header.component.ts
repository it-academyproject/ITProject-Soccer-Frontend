import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { LoginI } from '../../../modules/login.interface';
import { UsersI } from '../../../modules/users.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})

export class LandingHeaderComponent implements OnInit {
  constructor( private login: LoginService, private router: Router) { }

  email: string;
  password: string;
  resultado: string;

  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(){
  }

  onLogin(form: LoginI){
    localStorage.clear();
    this.login.onLoginUser(form).subscribe(data => {
      this.login.setUser(data);

      if (localStorage.getItem('currentUser').includes('MANAGER')){
        this.router.navigate(['/team/']);
      }else if (localStorage.getItem('currentUser').includes('ADMIN')){
        this.router.navigate(['/admin/matchcreator']);
      }else{
        this.resultado = 'Oops! the email / password is not correct';
      }
    },
    error => console.log(error)
    );
  }

  /*
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if (this.formularioLogin.valid) {
      this.onLogin(this.formularioLogin.value);
    } else {
      this.resultado = 'Oops! The fields are required';
    }
  }
}
