import { Injectable } from '@nestjs/common';

export type Todo = {
  id: string;
  text: string;
  isDone?: boolean;
};

let id = 1;

let todos: Todo[] = [
  {
    id: '1',
    text: 'todo1',
  },
];

@Injectable()
export class AppService {
  getTodos(): Todo[] {
    return todos;
  }

  addTodo(text: string) {
    id++;

    const todo = {
      id: id.toString(),
      text,
    };
    todos.push(todo);

    return todo;
  }

  deleteTodo(id: string) {
    todos = todos.filter((el) => el.id !== id);
  }
}
