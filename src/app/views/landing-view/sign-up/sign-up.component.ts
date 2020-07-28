import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from './servicios/country.service';
import { ValidatorsService } from './servicios/validators.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  user = {
    name: '',
  };

  countries: any[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private validators: ValidatorsService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.countries.unshift({
        name: 'Select country',
        code: '',
      });
      console.log(this.countries);
    });
  }

  get nameNotValid() {
    return this.form.get('name').invalid && this.form.get('name').touched;
  }

  get surnameNotValid() {
    return this.form.get('surname').invalid && this.form.get('surname').touched;
  }

  get emailNotValid() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get passwordNotValid() {
    return (
      this.form.get('password').invalid && this.form.get('password').touched
    );
  }

  get confirmPasswordNotValid() {
    const password = this.form.get('password').value;
    const confirmPassword = this.form.get('confirmPassword').value;

    return password === confirmPassword ? false : true;
  }

  get countryNotValid() {
    return this.form.get('country').invalid && this.form.get('country').touched;
  }

  createForm() {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
          ],
        ],
        country: ['', [Validators.required]],
      },
      {
        validators: this.validators.samePasswords(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  sign() {
    console.log(this.form);

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
