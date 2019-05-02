import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  todos = [
    {taskName: "Hello 1", isCompleted: false},
    {taskName: "Hello 2", isCompleted: true}
  ];

  title = '';
  isCompleted = false;


  constructor() { }

  ngOnInit() {
    console.log(this.todos);
  }

  onClick(){
    console.log("New Added -- ", this.title);
    this.todos.push({taskName: this.title, isCompleted: false});
  }

  completedTask(t){
    console.log("Done", t.taskName);
    this.isCompleted = !this.isCompleted;
  }

}
