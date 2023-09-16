import { Injectable } from '@nestjs/common';
import { UpdateTodoDto } from './dto/update-todo.dto';

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

let id = 1;

let todos: Todo[] = [
  {
    id: '1',
    text: 'todo1',
    done: false,
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
      done: false,
    };
    todos.push(todo);

    return todo;
  }

  updateTodo(id: string, todoUpdate: UpdateTodoDto) {
    const todoIndex = todos.findIndex((el) => el.id === id);

    if (todoIndex > -1) {
      if (todoUpdate.text) {
        todos[todoIndex].text = todoUpdate.text;
      }

      todos[todoIndex].done = todoUpdate.done === 'true';
    }
  }

  deleteTodo(id: string) {
    todos = todos.filter((el) => el.id !== id);
  }
}
