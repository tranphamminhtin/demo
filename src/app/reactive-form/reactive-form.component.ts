import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator, confirmPassValidator, onlyLetterValidator, numberPhoneValidator } from "../service/validator";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [Validators.required, onlyLetterValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, confirmPassValidator]],
      email: ['', [Validators.required, emailValidator]],
      numberphone: ['', [Validators.required, numberPhoneValidator]],
    });

    this.form.controls.password.valueChanges
      .subscribe(
        x => this.form.controls.password2.updateValueAndValidity()
      )
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid)
      console.log(1);
    else {
      this.form.markAllAsTouched();
      console.log(this.form.controls.numberphone);
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
