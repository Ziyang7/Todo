import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Title } from '@angular/platform-browser';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.todos = this.todos.filter(t => t.completed != true);
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.title != todo.title);
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
