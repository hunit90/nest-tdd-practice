import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// `PrismaService` 클래스 선언
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // `as unknown as Parameters<typeof this.$on>[0]` 추가
    this.$on(
      'beforeExit' as unknown as Parameters<typeof this.$on>[0],
      async () => {
        await app.close();
      },
    );
  }
}
