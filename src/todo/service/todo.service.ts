import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  async fetchAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  async fetchTodoItem(id: number): Promise<Todo | null> {
    return this.prismaService.todo.findUnique({ where: { id: Number(id) } });
  }

  async updateTodoItem(id: number, body: any): Promise<Todo | null> {
    const todoItem = this.prismaService.todo.findUnique({ where: { id: Number(id) } });
    if (!todoItem) {
      throw new BadRequestException('Todo does not exist');
    }

    const result = this.prismaService.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        title: body.title,
        content: body.content,
        is_done: body.is_done,
      },
    });

    return result;
  }

  async deleteTodoItem(id: number): Promise<Todo | null> {
    return this.prismaService.todo.delete({ where: { id: Number(id) } });
  }
}
