import { Component, OnInit } from '@angular/core';
import {Todos} from './../../Models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // so here we an empty array of Todos in todo
  todo: Todos[];

  constructor() { }

  ngOnInit(): void {
    this.todo = [
      {
        content: "This is the first todo",
        completed: false
      },
      {
        content: "This is the second todo",
        completed: true
      }
    ]
  }

}
