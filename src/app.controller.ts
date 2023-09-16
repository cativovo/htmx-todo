import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    const todos = this.appService.getTodos();
    console.log(todos);
    return res.render('home', {
      todos,
    });
  }
}
