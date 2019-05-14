import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cafu-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.myForm = this.fb.group(
      {
        uname: ["Vijay"] ,
        password: ["lksdjfklds"]
      }
    );
  }

  submitForm(){
    console.log(this.myForm);
  }

}
