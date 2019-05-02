import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cafu-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  @Input('myTodo') todo;
  @Input() index;

  constructor() { }

  ngOnInit() {
    console.log(this.todo);
  }

  completedTask(todo){

  }
}
