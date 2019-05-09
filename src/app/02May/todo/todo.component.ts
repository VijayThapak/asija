import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cafu-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  @Input('myTodo') todo;
  // @Input() myTodo;
  @Input() index;

  @Output() deleteCurrentTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.todo);
  }

  deleteTodo(todo) {
    console.log(todo);
    this.deleteCurrentTodo.emit(todo);

  }
}
