import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-layout',
  templateUrl: './todo-layout.component.html',
  styles: []
})
export class TodoLayoutComponent implements OnInit {
  public newtodoLayout = '';
  constructor() { }

  ngOnInit() {
  }

  addLayoutTodo(todoName) {
    // console.log(todoName);
    this.newtodoLayout = todoName;
  }

}
