import { Component, OnInit, Input, OnChanges } from '@angular/core';

import * as uuid from 'uuid';

@Component({
  selector: 'cafu-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todoName;
  todos = [
    {todoId: 1, taskName: "Hello 1", isCompleted: false},
    {todoId: 2, taskName: "Hello 2", isCompleted: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(data) {
    if (data.todoName.currentValue) {
      this.todos.push({todoId: uuid.v4(), taskName: data.todoName.currentValue, isCompleted: false});
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(obj => obj.todoId !== id);
  }

}
