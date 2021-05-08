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

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First todo",
        completed: false
      },
      {
        content: "Second todo",
        completed: true
      }
    ]
  }

}
