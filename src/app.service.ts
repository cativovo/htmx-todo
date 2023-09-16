import { Injectable } from '@nestjs/common';

export type Todo = {
  id: string;
  text: string;
  isDone?: boolean;
};

const todos: Todo[] = [
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
}
