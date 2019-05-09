import { Component, OnInit, Input, OnChanges } from '@angular/core';

import * as uuid from 'uuid';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'cafu-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todoNameListComp;
  @Input() todoNameListComp1;
  todos :any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.fetchTodoList();
  }

  fetchTodoList(){
    this.todoService.getTodoList().subscribe((data) => {
      this.todos = data;
    }, (err)=>{
      console.log(err);
    });
  }


  // {todoNameListComp : '', todoNameListComp1: ''}
  ngOnChanges(data) {
    if (data.todoNameListComp.currentValue) {
      this.todos.push({todoId: uuid.v4(), taskName: data.todoNameListComp.currentValue, isCompleted: false});
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(obj => obj.todoId !== id);
  }

}
