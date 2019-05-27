import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'cafu-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.initializeForm();
    this.formGroupType();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      userName: [{value: 'Vijay', disabled: false}, [Validators.required]],
      pwd: ['12345y', [Validators.required, Validators.minLength(5)]],
      address: this.fb.group({
        area: [],
        city: []
      })
    });
  }

  formGroupType() {
    this.loginForm = new FormGroup({
      userName: new FormControl("Vijay", [Validators.required]),
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
