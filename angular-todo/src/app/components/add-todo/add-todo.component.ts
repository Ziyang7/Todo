import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  
  title:string;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.title,
      compeleted: false
    }
    //basicly a return that goes upward
    this.addTodo.emit(todo);
  }
}
