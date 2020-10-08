import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  resultado: string;

  constructor() { }

  ngOnInit(): void {
  }

  formularioForgotPwd = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processFormForgotPwd() {
    console.log('hola');
    if (this.formularioForgotPwd.valid) {
      const allInfo = `Email: ${this.email}.`;
      this.resultado = allInfo; 
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }


}
