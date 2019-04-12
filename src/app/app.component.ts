import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-world';
  private firstName = "Vijay";
  private lastName = "Thapak";
  bool = false;
  url = '/a-/AAuE7mDaIPSwLi2eUtSdUZ0Knhmpfg6vTCe09VKiLw=s900-mo-c-c0xffffffff-rj-k-no';

  ngOnInit() {
    // console.log(this.getName());
  }

  getName() {
    return this.firstName + " " + this.lastName;
    // return `${this.firstName} ${this.lastName}`;
  }
}
