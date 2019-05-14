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
    this.todoService.getTodoList().subscribe((data:any[]) => {
      this.todos = data;
    }, (err)=>{
      console.log(err);
    });
  }


  // {todoNameListComp : '', todoNameListComp1: ''}
  ngOnChanges(data) {
    if (data.todoNameListComp.currentValue) {
      const newTodo = {id: uuid.v4(), taskName: data.todoNameListComp.currentValue, isCompleted: false};
      this.todoService.addNewTodo(newTodo).subscribe((res) => {
        this.todos.push(newTodo);
        console.log(res);
      }, (err) => {
        console.log(err);
      })

    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(obj => obj.id !== id);
  }

}
