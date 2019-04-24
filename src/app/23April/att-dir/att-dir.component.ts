import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cafu-att-dir',
  templateUrl: './att-dir.component.html',
  styles: []
})
export class AttDirComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addClasses(){
    return {'test1': true, 'test2': true, 'test3': false};
  }

}
