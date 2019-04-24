import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'cafu-events',
  templateUrl: './events.component.html',
  styles: []
})
export class EventsComponent implements OnInit {
  todos = [
    {todoName: "Todo 1", isCompleted: false},
    {todoName: "Todo 2", isCompleted: true}
  ];

  title = 'Events';
//  @ViewChild('input') inputDom;
  constructor() { }

  ngOnInit() {
  }

  onClick()   {
    console.log('Hello World..!!', this.title);
   // this.title = "Title Changed..";
   this.todos.push({isCompleted: false, todoName: this.title});

  }
}
