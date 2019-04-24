import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cafu-ng-for',
  templateUrl: './ng-for.component.html',
  styles: []
})
export class NgForComponent implements OnInit {
  arr = [1,2,3,4,5];
  arrObj = [{name: 'Gaurav', arr: this.arr, obj: {ls: "Asija"}}, {name: "Jack", arr: this.arr, obj : {ls:"John"}}];
  switchValue = 4;
  constructor() { }

  ngOnInit() {
  }

}
