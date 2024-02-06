import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { loggerConstant } from "libs/share/src/core/constants/logger.constant";

@Injectable()
export class PrismaService
  extends PrismaClient<
    Prisma.PrismaClientOptions,
    'query' | 'error' | 'beforeExit'
  >
  implements OnModuleInit {
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
      ],
    });

    this.$use(async (params, next) => {
      console.info(
        `Model: ${params.model}. Action: #${params.action}`,
      );

      const result = await next(params);

      return result;
    });

    this.$on('query', async (event) => {
      console.info(
        `Query: ${event.query} -- Params: ${event.params}`,
        loggerConstant.queryContext,
      );
    });

    this.$on('error', async (event) => {
      console.info(
        `Query error: ${JSON.stringify(event.message)}`,
        event.target,
        loggerConstant.queryContext,
      );
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
