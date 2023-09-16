import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Delete('delete-todo/:id')
  delete(@Param('id') id: string, @Res() res: Response) {
    this.appService.deleteTodo(id);

    return res.send();
  }

  @Put('update-todo/:id')
  updateTodo(
    @Param('id') id: string,
    @Body() body: UpdateTodoDto,
    @Res() res: Response,
  ) {
    this.appService.updateTodo(id, body);

    return res.send();
  }

  @Post('add-todo')
  addTodo(@Body() body: CreateTodoDto, @Res() res: Response) {
    const todo = this.appService.addTodo(body.text);

    return res.render('partials/todo-item', {
      layout: false,
      ...todo,
    });
  }

  @Get()
  homePage(@Res() res: Response) {
    const todos = this.appService.getTodos();
    return res.render('home', {
      todos,
    });
  }
}
