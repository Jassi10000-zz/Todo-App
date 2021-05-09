import { Component, OnInit } from '@angular/core';
import {Todos} from './../../Models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // so here we an empty array of Todos in todo
  todos: Todos[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First todo",
        completed: false
      },
      {
        content: "Second todo",
        completed: false
      }
    ]
  }


  toggleDone (id:number)  {

    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v,i) => i != id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = ""
  }
}
