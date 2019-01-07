import {AbstractControl} from '@angular/forms';

export class CustomValidators {

  static passwordMatch(control: AbstractControl) {
    return (control.value.newPassword === control.value.passwordCheck) ? null : {passwords_does_not_match: true};
  }

  static checkOldPassword(control: AbstractControl) {

   return new Promise((resolve, reject) => {
     if (!control.value) {
       resolve(null);
     }

     if (control.value as String === '123') {
       resolve(null);
     } else {
       resolve({old_password_does_not_match : true});
     }



   });



  }

}
