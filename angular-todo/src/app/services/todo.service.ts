import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://api.myjson.com/bins/15rb5u';
  limit:number = 5;
  todosUrllimit:string  = `${this.todosUrl}?_limit=${this.limit}`

  constructor(private http: HttpClient) { }
  //get todos
  getTodos():Observable<Todo[]> {
    
    return this.http.get<Todo[]>(this.todosUrllimit);

  }
  
  //add todos
  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  //toggle Completed
  toggleCompleted (todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  //delete todo
  deleteTodo(todo: Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
