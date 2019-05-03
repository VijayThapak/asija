import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cafu-todo-layout',
  templateUrl: './todo-layout.component.html',
  styles: []
})
export class TodoLayoutComponent implements OnInit {
  newtodo = '';
  constructor() { }

  ngOnInit() {
  }

  addTodo(todoName) {
    console.log(todoName);
    this.newtodo = todoName;
  }

}
