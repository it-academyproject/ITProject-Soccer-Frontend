import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})

export class LandingHeaderComponent implements OnInit {

  username: string;
  password: string;
  resultado: string;

  constructor() { }

  ngOnInit(): void {
  }

  formularioLogin = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    if (this.formularioLogin.valid) {
      const allInfo = `Username: ${this.username}. Pwd: ${this.password}.`;
      this.resultado = allInfo; 
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

}
