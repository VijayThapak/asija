import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { FormValidatorService } from 'src/app/form-validator.service';


// function myValidator(control: AbstractControl): {[key: string]: boolean } | null {
//   if (control.value.length < 2) {
//     return {'invalid-name': true }
//   }
//   return null;
// }

// function myValidator(value): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: boolean } | null => {
//     if (control.value.length < value) {
//       return {'invalid-name': true }
//     }
//     return null;
//   }
// }

  // function test(control: FormGroup): {[key: string]: boolean } | null {
  //   if (control.value.length < 5) {
  //     return {'invalid-name': true }
  //   }
  //   return null;
  // }

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private formValidator: FormValidatorService) { }

  ngOnInit() {
    // this.initializeForm();
    this.formGroupType();
    this.loginForm.valueChanges.subscribe(data => {
      console.log(data);
    });

    this.loginForm.get('userName').valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  // initializeForm() {
  //   this.loginForm = this.fb.group({
  //     userName: [{value: 10, disabled: false}, [Validators.required, myValidator]],
  //     pwd: ['12345y', [Validators.required, Validators.minLength(5)]],
  //     address: this.fb.group({
  //       area: [],
  //       city: []
  //     })
  //   });
  // }

  formGroupType() {
    this.loginForm = new FormGroup({
      userName: new FormControl("Vijay", [Validators.required, this.formValidator.myValidator(5)]),
      pwd: new FormControl('345678i', [Validators.minLength(5)]),
      address: new FormGroup({
        area: new FormControl('om vihar'),
        city: new FormControl('Gurgaon')
      })
    });

  }

  disableInput(){
    if(this.loginForm.get('userName').disabled){
      this.loginForm.get('userName').enable();
    } else{
      this.loginForm.get('userName').disable();
    }
  }

  resetForm(){
    //this.loginForm.reset();

    // this.loginForm.setValue({
    //   userName: "thapak",
    //   pwd: '2345tyu'
    // });

    this.loginForm.patchValue({
      userName: "thapak",
    });
  }

  submitForm(){
    // console.log(this.myForm);
    console.log(this.loginForm.value);
    console.log(this.loginForm.getRawValue());
  }

}
