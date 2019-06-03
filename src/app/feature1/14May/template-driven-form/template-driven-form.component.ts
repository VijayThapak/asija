import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styles: []
})
export class TemplateDrivenFormComponent implements OnInit {

  uname = 'Vijay';
  pwd = 123456;

  @ViewChild("myForm") myForm;
  constructor() { }

  ngOnInit() {
  }

  submitForm(formData){
    console.log('test', formData);
  }


}
