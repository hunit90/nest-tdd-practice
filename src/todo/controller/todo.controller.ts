import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async fetchAllTodos(): Promise<Todo[]> {
    return this.todoService.fetchAllTodos();
  }

  @Get(':id')
  async fetchTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.fetchTodoItem(id);
  }

  @Patch(':id')
  async updateTodoItem(@Param('id') id: number, @Body() body: Todo): Promise<Todo | null> {
    return this.todoService.updateTodoItem(id, body);
  }

  @Delete(':id')
  async deleteTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.deleteTodoItem(id);
  }
}
