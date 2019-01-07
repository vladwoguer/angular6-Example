import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../shared/custom-validators';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  courseForm: FormGroup

  categories = ['Development', 'Art', 'Languages'];

  constructor() { }

  ngOnInit() {

    this.courseForm = new FormGroup({
      oldPassword: new FormControl('', [
        Validators.required
      ], [CustomValidators.checkOldPassword]),
      passwords: new FormGroup({
        newPassword: new FormControl('', [Validators.required]),
        passwordCheck: new FormControl('', [Validators.required])
      }, [CustomValidators.passwordMatch])

    });
  }

  get oldPassword(): AbstractControl {
    return this.courseForm.get('oldPassword');
  }

  get newPassword(): AbstractControl {
    return this.courseForm.get('passwords').get('newPassword');
  }

  get passwordCheck(): AbstractControl {
    return this.courseForm.get('passwords').get('passwordCheck');
  }

  get passwords(): AbstractControl {
    return this.courseForm.get('passwords');
  }


  submitForm(courseForm: FormGroup) {
    console.log(courseForm);
  }

}
