import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cafu-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todoName;
  todos = [
    {taskName: "Hello 1", isCompleted: false},
    {taskName: "Hello 2", isCompleted: true}
  ];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(data) {
    console.log(data);
  }

}
