import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cafu-add-todo',
  templateUrl: './add-todo.component.html',
  styles: []
})
export class AddTodoComponent implements OnInit {
  mytodo = '';
  @Output() createTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.createTodo.emit(this.mytodo);
    this.mytodo = '';
  }
}
